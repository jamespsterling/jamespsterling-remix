#!/bin/bash

# Image Optimization Setup Script
# Installs all required binaries for image optimization

echo "🚀 Setting up Image Optimization Tools"
echo "======================================"

# Check if running on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script is designed for macOS with Homebrew"
    echo "   For other systems, install manually:"
    echo "   - webp (cwebp)"
    echo "   - libavif (avifenc)" 
    echo "   - imagemagick (magick)"
    echo "   - pngquant"
    echo "   - optipng"
    echo "   - jpegoptim"
    exit 1
fi

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "❌ Homebrew not found. Please install Homebrew first:"
    echo "   /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    exit 1
fi

echo "✅ Homebrew found"

# Install required tools
echo ""
echo "📦 Installing image optimization tools..."

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# WebP tools
if command_exists cwebp; then
    echo "  ✅ WebP tools already installed"
else
    echo "  🔧 Installing WebP tools..."
    brew install webp
fi

# AVIF tools
if command_exists avifenc; then
    echo "  ✅ AVIF tools already installed"
else
    echo "  🔧 Installing AVIF tools..."
    brew install libavif
fi

# ImageMagick for responsive images
if command_exists magick || command_exists convert; then
    echo "  ✅ ImageMagick already installed"
else
    echo "  🔧 Installing ImageMagick..."
    brew install imagemagick
fi

# PNG compression tools
if command_exists pngquant && command_exists optipng; then
    echo "  ✅ PNG compression tools already installed"
else
    echo "  🔧 Installing PNG compression tools..."
    if ! command_exists pngquant; then
        brew install pngquant
    fi
    if ! command_exists optipng; then
        brew install optipng
    fi
fi

# JPEG compression tools
if command_exists jpegoptim; then
    echo "  ✅ JPEG compression tools already installed"
else
    echo "  🔧 Installing JPEG compression tools..."
    brew install jpegoptim
fi

# MozJPEG (alternative JPEG compressor)
if command_exists cjpeg; then
    echo "  ✅ MozJPEG already installed"
else
    echo "  🔧 Installing MozJPEG..."
    brew install mozjpeg
fi

echo ""
echo "🔍 Verifying installations..."

# Check each tool
tools=("cwebp" "avifenc" "magick" "pngquant" "optipng" "jpegoptim" "cjpeg")

for tool in "${tools[@]}"; do
    if command -v "$tool" &> /dev/null; then
        echo "  ✅ $tool installed"
    else
        echo "  ❌ $tool not found"
    fi
done

echo ""
echo "🎉 Setup complete!"
echo ""
echo "💡 Next steps:"
echo "1. Run: npm run optimize:images"
echo "2. Test your website to ensure all images load correctly"
echo "3. Check performance improvements with Lighthouse"
echo ""
echo "📚 Available commands:"
echo "  npm run optimize:images  - Optimize all images"
echo "  npm run optimize:new     - Optimize only new images"
echo ""
echo "📖 Documentation:"
echo "  See ./doc/README.md for complete documentation"
