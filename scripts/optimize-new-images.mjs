#!/usr/bin/env node

import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { basename, extname, join } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Configuration
const config = {
  imgDir: './public/img',
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  webpQuality: 100,
  avifQuality: 100 // Lossless compression
};

// Check if tools are installed
async function checkTools() {
  const tools = {
    cwebp: await checkTool('cwebp -version'),
    avifenc: await checkTool('avifenc --version'),
    magick: await checkTool('magick -version') || await checkTool('convert -version'),
    pngquant: await checkTool('pngquant --version'),
    optipng: await checkTool('optipng -v'),
    jpegoptim: await checkTool('jpegoptim --version')
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


// Find new images (not yet optimized)
async function findNewImages() {
  const { glob } = await import('glob');
  const allImages = await glob(`${config.imgDir}/**/*.{jpg,jpeg,png}`, { 
    ignore: ['**/*.compressed.*', '**/*-*w.*', '**/*.webp', '**/*.avif'] 
  });
  
  const newImages = [];
  
  for (const image of allImages) {
    const ext = extname(image);
    const webpPath = image.replace(ext, '.webp');
    const avifPath = image.replace(ext, '.avif');
    
    // Check if WebP or AVIF already exists
    const hasWebP = await fs.access(webpPath).then(() => true).catch(() => false);
    const hasAVIF = await fs.access(avifPath).then(() => true).catch(() => false);
    
    if (!hasWebP || !hasAVIF) {
      newImages.push(image);
    }
  }
  
  return newImages;
}

// Optimize a single image
async function optimizeImage(imagePath) {
  const tools = await checkTools();
  const ext = extname(imagePath).toLowerCase();
  const baseName = basename(imagePath, ext);
  const dir = imagePath.replace(basename(imagePath), '');
  
  console.log(`🖼️  Optimizing: ${basename(imagePath)}`);
  
  // 1. Compress original
  if (ext === '.png' && tools.pngquant) {
    const compressedPath = join(dir, `${baseName}.compressed${ext}`);
    try {
      await execAsync(`pngquant --quality=100-100 --force --output "${compressedPath}" "${imagePath}"`);
      console.log(`  ✅ Compressed PNG`);
    } catch (error) {
      console.log(`  ⚠️  Compression failed`);
    }
  }
  
  // 2. Convert to WebP
  if (tools.cwebp) {
    const webpPath = join(dir, `${baseName}.webp`);
    try {
      await execAsync(`cwebp -q ${config.webpQuality} "${imagePath}" -o "${webpPath}"`);
      console.log(`  ✅ WebP created`);
    } catch (error) {
      console.log(`  ❌ WebP conversion failed`);
    }
  }
  
  // 3. Convert to AVIF
  if (tools.avifenc) {
    const avifPath = join(dir, `${baseName}.avif`);
    try {
      await execAsync(`avifenc --min 0 --max 0 --speed 0 --yuv 444 --depth 8 "${imagePath}" "${avifPath}"`);
      console.log(`  ✅ AVIF created`);
    } catch (error) {
      console.log(`  ❌ AVIF conversion failed`);
    }
  }
  
  
  console.log(`  🎉 ${basename(imagePath)} optimization complete!\n`);
}

// Main function
async function optimizeNewImages() {
  console.log('🆕 Optimizing New Images');
  console.log('========================\n');

  const newImages = await findNewImages();
  
  if (newImages.length === 0) {
    console.log('✅ No new images found - everything is already optimized!');
    return;
  }

  console.log(`📁 Found ${newImages.length} new images to optimize:\n`);
  
  for (const image of newImages) {
    await optimizeImage(image);
  }

  console.log('🎉 All new images optimized!');
  console.log('\n💡 Next steps:');
  console.log('1. Update your code to use .webp or .avif extensions');
  console.log('2. Test the images on your website');
  console.log('3. Consider adding lazy loading for better performance');
}

// Run the optimization
optimizeNewImages().catch(console.error);
