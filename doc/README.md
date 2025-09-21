# Image Optimization Documentation

## Quick Start

```bash
# 1. Setup (run once)
npm run setup:images

# 2. Optimize all images (first time)
npm run optimize:images

# 3. Optimize new images (ongoing)
npm run optimize:new
```

## Commands

### Setup
```bash
npm run setup:images
```
Installs all required tools (webp, avif, imagemagick, etc.) with smart detection to skip already installed tools.

### Optimize all images
```bash
npm run optimize:images
```
- Compresses original images with lossless optimization
- Converts to WebP format (30% smaller than JPG/PNG)
- Converts to AVIF format (50% smaller than WebP)
- Generates responsive sizes (400w, 800w, 1200w, 1600w)
- Updates code references to use modern formats

### Optimize new images
```bash
npm run optimize:new
```
- Finds images that haven't been optimized yet
- Applies all optimizations to new images only
- Skips already processed images

## Features

- **Modern Image Formats**: AVIF, WebP, JPG/PNG fallbacks
- **Simple Fallbacks**: AVIF → WebP → JPG/PNG cascade
- **Smart Compression**: Lossless optimization for PNG/JPEG
- **Automatic Code Updates**: CSS and HTML fallbacks
- **Lazy Loading**: Better performance for non-critical images

## Simple Image Fallbacks

The system uses a simple but effective approach:

- **AVIF** (primary): Best compression, modern browsers
- **WebP** (fallback): Good compression, wide support
- **JPG/PNG** (final fallback): Universal compatibility

No responsive variants are generated to avoid bloat and maintenance overhead.

## File Size Reductions

- **WebP**: ~30% smaller than JPG/PNG (lossless)
- **AVIF**: ~50% smaller than WebP (lossless, next-gen browsers)
- **Compression**: Additional 10-60% savings on PNGs

## Browser Support

- **AVIF**: Chrome, Firefox, Safari 16+ (~85% of users)
- **WebP**: All modern browsers (~95% of users)
- **JPG/PNG**: Fallback for older browsers

## Project Structure

```
scripts/
├── setup.sh                           # Install tools
├── optimize-images-complete.mjs       # Master optimization script
└── optimize-new-images.mjs            # New images only

doc/
└── README.md                          # This file
```
