# Security Configuration for Portfolio Admin

## Overview
The admin interface is protected by multiple security layers to ensure only authorized users can access content management.

## Security Features

### 1. Authentication
- **Password-based authentication** with secure token verification
- **Timing-safe comparison** to prevent timing attacks
- **Session tokens** for secure access to admin interface

### 2. Environment Variables
Set the following environment variables in your Cloudflare Pages dashboard:

```bash
ADMIN_TOKEN=your-super-secure-admin-password-here
```

**Important**: Use a strong, unique password for production!

### 3. Access Control
- Admin routes are protected by authentication middleware
- Direct access to `/admin/index.html` is blocked without proper token
- All admin operations require valid authentication

### 4. Production Deployment

#### Cloudflare Pages Setup
1. Go to your Cloudflare Pages dashboard
2. Navigate to Settings > Environment Variables
3. Add `ADMIN_TOKEN` with a strong password
4. Deploy your site

#### Local Development
1. Create a `.env` file with your admin token:
   ```bash
   ADMIN_TOKEN=your-local-admin-password
   ```
2. Run your development server

### 5. Security Best Practices

#### Password Requirements
- Use a strong, unique password (minimum 16 characters)
- Include uppercase, lowercase, numbers, and special characters
- Example: `MyS3cur3P@ssw0rd!2024`

#### Access Logging
- All admin access attempts are logged
- Failed login attempts are tracked
- Monitor for suspicious activity

#### Regular Updates
- Change admin password regularly
- Monitor access logs
- Keep dependencies updated

## Accessing the Admin Interface

1. Navigate to `/admin` (not `/admin/index.html`)
2. Enter your admin password
3. You'll be redirected to the secure Decap CMS interface

## Troubleshooting

### "Admin not configured" Error
- Ensure `ADMIN_TOKEN` environment variable is set
- Check Cloudflare Pages environment variables

### "Unauthorized" Error
- Verify your admin password is correct
- Check that the token in the URL is valid
- Clear browser cache and try again

### "File not found" Error
- Ensure you're accessing `/admin` first, not directly `/admin/index.html`
- Check that all admin files are properly deployed
