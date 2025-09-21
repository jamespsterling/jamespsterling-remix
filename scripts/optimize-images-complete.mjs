#!/usr/bin/env node

import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { basename, extname } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Configuration
const config = {
  imgDir: './public/img',
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  webpQuality: 100,
  avifQuality: 100, // Lossless compression
  compressionTools: {
    pngquant: 'pngquant --quality=100-100 --force',
    optipng: 'optipng -o7',
    jpegoptim: 'jpegoptim --max=100',
    mozjpeg: 'cjpeg -quality 100'
  }
};

// Check if tools are installed
async function checkTools() {
  const tools = {
    cwebp: await checkTool('cwebp -version'),
    avifenc: await checkTool('avifenc --version'),
    magick: await checkTool('magick -version') || await checkTool('convert -version'),
    pngquant: await checkTool('pngquant --version'),
    optipng: await checkTool('optipng -v'),
    jpegoptim: await checkTool('jpegoptim --version'),
    mozjpeg: await checkTool('cjpeg -version')
  };
  
  return tools;
}

async function checkTool(command) {
  try {
    await execAsync(command);
    return true;
  } catch {
    return false;
  }
}

// Get image dimensions
async function getImageDimensions(filePath) {
  try {
    const { stdout } = await execAsync(`magick identify -format "%wx%h" "${filePath}"`);
    const [width, height] = stdout.trim().split('x').map(Number);
    return { width, height };
  } catch (error) {
    console.log(`  ⚠️  Could not get dimensions for ${filePath}: ${error.message}`);
    return null;
  }
}


// Step 1: Compress original images
async function compressImages() {
  console.log('🗜️  Step 1: Compressing original images...');
  
  const tools = await checkTools();
  let processed = 0;
  let totalSavings = 0;

  const files = await getImageFiles();
  console.log(`Found ${files.length} files to process`);
  
  for (const file of files) {
    console.log(`Processing: ${file}`);
    
    // Check if file actually exists
    try {
      await fs.access(file);
    } catch {
      console.log(`  ⚠️  File not found: ${file}`);
      continue;
    }
    
    const ext = extname(file).toLowerCase();
    
    // Skip if file is already compressed (shouldn't happen with new logic)
    if (file.includes('.compressed.')) {
      console.log(`  ⏭️  Already compressed: ${file}`);
      continue;
    }
    
    // Skip compression step - we'll work directly with original files
    // The compression step is not needed since we're using lossless WebP/AVIF
    console.log(`  ⏭️  Skipping compression, using original: ${file}`);
    continue;

    let success = false;
    let savings = 0;

    if (ext === '.png' && tools.pngquant) {
      console.log(`  🔧 Compressing PNG with pngquant: ${file}`);
      success = await compressWithTool(file, compressedPath, tools.pngquant);
    } else if (ext === '.png' && tools.optipng) {
      console.log(`  🔧 Compressing PNG with optipng: ${file}`);
      success = await compressWithTool(file, compressedPath, `${tools.optipng} -out "${compressedPath}" "${file}"`);
    } else if ((ext === '.jpg' || ext === '.jpeg') && tools.jpegoptim) {
      console.log(`  🔧 Compressing JPG with jpegoptim: ${file}`);
      success = await compressWithTool(file, compressedPath, `${tools.jpegoptim} --dest="${file.replace(basename(file), '')}" "${file}" && mv "${file}" "${compressedPath}"`);
    }

    if (success) {
      let originalSize = 0;
      let compressedSize = 0;
      
      // Get original size (file might have been moved by compression)
      try {
        originalSize = (await fs.stat(file)).size;
      } catch {
        // File was moved, try to get size from compressed file
        try {
          originalSize = (await fs.stat(compressedPath)).size;
        } catch {
          originalSize = 0;
        }
      }
      
      // Get compressed size
      try {
        compressedSize = (await fs.stat(compressedPath)).size;
      } catch {
        compressedSize = 0;
      }
      
      savings = originalSize - compressedSize;
      
      if (savings > 0) {
        const percent = ((savings / originalSize) * 100).toFixed(1);
        console.log(`  ✅ ${basename(file)}: ${percent}% smaller`);
      } else {
        console.log(`  ⏭️  ${basename(file)}: no compression benefit`);
      }
      
      processed++;
      totalSavings += savings;
    }
  }

  console.log(`  📊 Compressed ${processed} images, saved ${(totalSavings / 1024).toFixed(1)}KB\n`);
  return { processed, savings: totalSavings };
}

async function compressWithTool(input, output, command) {
  try {
    await execAsync(command);
    return true;
  } catch {
    return false;
  }
}

// Step 2: Convert to WebP
async function convertToWebP() {
  console.log('🖼️  Step 2: Converting to WebP...');
  
  const tools = await checkTools();
  if (!tools.cwebp) {
    console.log('  ⚠️  cwebp not installed, skipping WebP conversion');
    return { processed: 0 };
  }

  let processed = 0;
  const files = await getImageFiles();
  for (const file of files) {
    // Check if file actually exists
    try {
      await fs.access(file);
    } catch {
      continue;
    }
    
    const ext = extname(file).toLowerCase();
    const webpPath = file.replace(ext, '.webp');
    
    try {
      await fs.access(webpPath);
      continue;
    } catch {}

    try {
      await execAsync(`cwebp -q ${config.webpQuality} "${file}" -o "${webpPath}"`);
      console.log(`  ✅ ${basename(file)} → ${basename(webpPath)}`);
      processed++;
    } catch (error) {
      console.log(`  ❌ Failed: ${basename(file)}`);
    }
  }

  console.log(`  📊 Converted ${processed} images to WebP\n`);
  return { processed };
}

// Step 3: Convert to AVIF
async function convertToAVIF() {
  console.log('🎨 Step 3: Converting to AVIF...');
  
  const tools = await checkTools();
  if (!tools.avifenc) {
    console.log('  ⚠️  avifenc not installed, skipping AVIF conversion');
    return { processed: 0 };
  }

  let processed = 0;
  const files = await getImageFiles();
  for (const file of files) {
    // Check if file actually exists
    try {
      await fs.access(file);
    } catch {
      continue;
    }
    
    const ext = extname(file).toLowerCase();
    const avifPath = file.replace(ext, '.avif');
    
    try {
      await fs.access(avifPath);
      continue;
    } catch {}

    try {
      await execAsync(`avifenc --min 0 --max 0 --speed 0 --yuv 444 --depth 8 "${file}" "${avifPath}"`);
      console.log(`  ✅ ${basename(file)} → ${basename(avifPath)}`);
      processed++;
    } catch (error) {
      console.log(`  ❌ Failed: ${basename(file)}`);
    }
  }

  console.log(`  📊 Converted ${processed} images to AVIF\n`);
  return { processed };
}

// Step 4: Generate responsive sizes (DISABLED - using simple AVIF/WebP/JPG fallbacks)
async function generateResponsiveSizes() {
  console.log('📱 Step 4: Skipping responsive generation (using simple fallbacks)\n');
  return { processed: 0, generated: 0 };
}

// Step 5: Update code with proper fallbacks
async function updateCodeWithFallbacks() {
  console.log('🔄 Step 5: Updating code with proper fallbacks...');
  
  const patterns = [
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.scss',
    'app/**/*.css'
  ];

  let updated = 0;
  for (const pattern of patterns) {
    const { glob } = await import('glob');
    const files = await glob(pattern, { ignore: ['node_modules/**', 'public/**'] });
    
    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      let newContent = content;
      
      // Update CSS background images with fallbacks
      if (file.endsWith('.scss') || file.endsWith('.css')) {
        newContent = updateCSSBackgrounds(newContent);
      }
      
      // Update HTML img tags with picture elements
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        newContent = updateHTMLImages(newContent);
      }
      
      if (newContent !== content) {
        await fs.writeFile(file, newContent, 'utf8');
        console.log(`  ✅ Updated: ${file}`);
        updated++;
      }
    }
  }

  console.log(`  📊 Updated ${updated} files\n`);
  return { updated };
}

// Update CSS background images with proper fallbacks
function updateCSSBackgrounds(content) {
  // Pattern: url(/img/path.webp) -> url(/img/path.jpg); url(/img/path.webp);
  const webpPattern = /url\(([^)]+\.webp)\)/g;
  
  return content.replace(webpPattern, (match, webpPath) => {
    const jpgPath = webpPath.replace('.webp', '.jpg');
    return `url(${jpgPath});\n  background-image: url(${webpPath})`;
  });
}

// Update HTML img tags with picture elements
function updateHTMLImages(content) {
  // Pattern: <img src="/img/path.webp" ... />
  const imgPattern = /<img\s+([^>]*?)src="([^"]*\.webp)"([^>]*?)>/g;
  
  return content.replace(imgPattern, (match, beforeSrc, webpSrc, afterSrc) => {
    const basePath = webpSrc.replace('.webp', '');
    const jpgSrc = basePath + '.jpg';
    const avifSrc = basePath + '.avif';
    
    // Extract alt and other attributes
    const altMatch = match.match(/alt="([^"]*)"/);
    const alt = altMatch ? altMatch[1] : '';
    
    const classMatch = match.match(/className="([^"]*)"/);
    const className = classMatch ? classMatch[1] : '';
    
    const loadingMatch = match.match(/loading="([^"]*)"/);
    const loading = loadingMatch ? loadingMatch[1] : 'lazy';
    
    return `<picture>
  <source srcSet="${avifSrc}" type="image/avif" />
  <source srcSet="${webpSrc}" type="image/webp" />
  <img 
    src="${jpgSrc}" 
    alt="${alt}" 
    className="${className}"
    loading="${loading}"
    srcSet="${basePath}-400w.jpg 400w,
            ${basePath}-800w.jpg 800w,
            ${basePath}-1200w.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 1000px) 800px,
           1200px"
  />
</picture>`;
  });
}

// Helper function to get all image files
async function getImageFiles() {
  const { glob } = await import('glob');
  // Only get original files as the source of truth
  const originalFiles = await glob(`${config.imgDir}/**/*.{jpg,jpeg,png}`, { 
    ignore: ['**/*.compressed.*', '**/*.webp', '**/*.avif'] 
  });
  
  // Filter out files that don't actually exist
  const existingFiles = [];
  for (const file of originalFiles) {
    try {
      await fs.access(file);
      existingFiles.push(file);
    } catch {
      // File doesn't exist, skip it
    }
  }
  
  return existingFiles;
}

// Main optimization function
async function optimizeImages() {
  console.log('🚀 Complete Image Optimization Pipeline');
  console.log('=======================================\n');

  const startTime = Date.now();
  
  // Run all optimization steps
  const results = {
    compression: await compressImages(),
    webp: await convertToWebP(),
    avif: await convertToAVIF(),
    responsive: await generateResponsiveSizes(),
    codeUpdate: await updateCodeWithFallbacks()
  };

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  // Summary
  console.log('📊 Optimization Summary');
  console.log('======================');
  console.log(`✅ Compressed: ${results.compression.processed} images`);
  console.log(`✅ WebP: ${results.webp.processed} images`);
  console.log(`✅ AVIF: ${results.avif.processed} images`);
  console.log(`✅ Responsive: ${results.responsive.generated} variants for ${results.responsive.processed} images`);
  console.log(`✅ Code updated: ${results.codeUpdate.updated} files`);
  console.log(`💾 Space saved: ${(results.compression.savings / 1024).toFixed(1)}KB`);
  console.log(`⏱️  Total time: ${duration} seconds`);

  console.log('\n💡 Next steps:');
  console.log('1. Test your website to ensure all images load correctly');
  console.log('2. Check performance improvements with Lighthouse');
  console.log('3. Verify fallbacks work in older browsers');
}

// Run the optimization
optimizeImages().catch(console.error);
