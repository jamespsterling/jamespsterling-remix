# Admin Access - Local Development Only

## Overview
Admin access is **only available in local development mode** for security reasons. The `/admin` route serves the Decap CMS interface for content management.

## Accessing the Admin Interface

### Local Development
1. **Start your dev server**: `npm run dev`
2. **Visit the admin interface**: `http://localhost:8788/admin/`
3. **Login with GitHub**: Use your GitHub credentials to authenticate
4. **Edit content**: Manage your portfolio content through the visual interface

## What You Can Edit

### Articles/Case Studies
- **Portfolio Case Study**: Edit the markdown content for your portfolio project
- **IoT Events App**: Edit the gallery and content for the IoT Events App
- **Add new articles**: Create new case studies and project articles

### Structured Data
- **About Information**: Edit your personal information and bio
- **Experience**: Manage your work experience entries
- **Education**: Update your educational background
- **Skills**: Edit your technical skills and tools
- **Certifications**: Manage your professional certifications

## Content Management Workflow

### 1. Edit Content Locally
- Use the admin interface at `/admin/` to edit your content
- All changes are made through the visual Decap CMS interface
- Content is stored in markdown files and YAML configuration

### 2. Commit Changes
- Changes are automatically committed to your Git repository
- You can review changes in your Git history
- All content is version controlled

### 3. Deploy to Production
- Push your changes to the main branch
- Cloudflare Pages will automatically deploy the updated content
- Admin interface is **not available in production** for security

## Security Features

### ✅ Development Only
- Admin interface only works in local development
- No production access to content management
- Secure by default

### ✅ GitHub Authentication
- Login required with GitHub credentials
- All changes are tracked in your Git repository
- No additional authentication setup needed

### ✅ Version Control
- All content changes are committed to Git
- Full history of content modifications
- Easy rollback if needed

## Troubleshooting

### "Admin not accessible" Error
- Ensure you're running in development mode (`npm run dev`)
- Check that you're accessing `http://localhost:8788/admin/`
- Verify the dev server is running

### "GitHub login not working" Error
- Ensure you have GitHub authentication set up
- Check your GitHub repository permissions
- Verify the repository configuration in `config.yml`

### "Content not updating" Error
- Check that changes are being committed to Git
- Verify the file paths in the Decap CMS configuration
- Ensure the markdown files are in the correct directory

## Production Deployment

In production:
- ✅ **Admin interface is completely blocked**
- ✅ **Content is served from markdown files**
- ✅ **No content management interface available**
- ✅ **Secure by default**

This ensures your content management is only available during development while maintaining full security in production.
