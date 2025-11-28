# SmartSpend Deployment Guide

This guide provides step-by-step instructions for deploying your SmartSpend website to Netlify.

## Prerequisites

1. ✅ Node.js installed (v18 or higher)
2. ✅ npm installed
3. ✅ Git installed
4. ✅ GitHub account created
5. ✅ Netlify account created (free tier is sufficient)

## Option 1: Deploy via GitHub (Recommended)

This method enables continuous deployment - any changes you push to GitHub will automatically deploy to Netlify.

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `smartspend-website`
   - Choose Public or Private
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Initialize Git and push code**:
   ```bash
   cd /path/to/smartspend-website
   git init
   git add .
   git commit -m "Initial commit: SmartSpend expense tracker"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/smartspend-website.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Go to Netlify**: https://app.netlify.com

2. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select your `smartspend-website` repository

3. **Configure Build Settings**:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Leave other settings as default

4. **Deploy**:
   - Click "Deploy site"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at a URL like: `random-name-12345.netlify.app`

5. **Customize Domain (Optional)**:
   - Go to Site settings → Domain management
   - Click "Options" → "Edit site name"
   - Change to: `smartspend-yourname.netlify.app`

### Step 3: Test Your Live Site

1. Open the Netlify URL in your browser
2. Test all pages:
   - Landing page
   - Login page
   - Create Account page
   - Dashboard
   - Reset Password
3. Test on mobile devices (responsive design)
4. Check all links and buttons

## Option 2: Deploy via Netlify CLI

This method is good for one-time deployments or local testing.

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build Your Project

```bash
cd /path/to/smartspend-website
npm install
npm run build
```

### Step 3: Deploy to Netlify

```bash
# Login to Netlify
netlify login

# Deploy (first time)
netlify deploy

# Follow prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: smartspend-yourname
# - Deploy path: ./dist

# After reviewing, deploy to production
netlify deploy --prod
```

### Step 4: Get Your Site URL

After deployment, Netlify will provide:
- **Live URL**: https://smartspend-yourname.netlify.app
- **Admin URL**: https://app.netlify.com/sites/smartspend-yourname

## Option 3: Manual Deploy (Drag & Drop)

### Step 1: Build Locally

```bash
cd /path/to/smartspend-website
npm install
npm run build
```

### Step 2: Deploy via Netlify UI

1. Go to https://app.netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `dist` folder
4. Wait for deployment to complete
5. Your site is live!

## Updating Your Website

### If using GitHub method:
```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push
# Netlify automatically rebuilds and deploys
```

### If using CLI method:
```bash
npm run build
netlify deploy --prod
```

## Troubleshooting

### Build Fails on Netlify

**Problem**: "Module not found" or dependency errors

**Solution**:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Commit and push changes
4. Retry deployment

### Routes Not Working (404 errors)

**Problem**: Navigating directly to routes like `/dashboard` returns 404

**Solution**: This should be handled by `netlify.toml`, but verify:
1. Check that `netlify.toml` exists in your project root
2. Verify it contains the redirects rule
3. Redeploy if needed

### Images Not Loading

**Problem**: Images from Figma not displaying

**Solution**: 
- Figma image URLs are temporary (7 days)
- For production, download images and add to project
- Update image paths in components

## Performance Optimization

### 1. Analyze Bundle Size
```bash
npm run build
# Check the output for large chunks
```

### 2. Enable Compression
Netlify automatically enables gzip compression.

### 3. Add Asset Optimization
In Netlify dashboard:
- Go to Site settings → Build & deploy → Post processing
- Enable "Asset optimization"
- Enable "Pretty URLs"

## Custom Domain (Optional)

### If you have your own domain:

1. Go to Netlify Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `smartspend.com`)
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate

## Environment Variables (For Future)

If you add backend API or other secrets:

1. Go to Site settings → Environment variables
2. Add variables (e.g., `VITE_API_URL`)
3. Update code to use `import.meta.env.VITE_API_URL`
4. Redeploy

## Testing Checklist

Before submitting your project, verify:

- ✅ All pages load correctly
- ✅ Navigation works on all pages
- ✅ Responsive design works on mobile/tablet
- ✅ No console errors in browser dev tools
- ✅ All images load properly
- ✅ Forms show proper validation
- ✅ Buttons have hover effects
- ✅ Dashboard charts render correctly
- ✅ Site loads quickly (< 3 seconds)

## Submission Information

For your SOFE 4850U project submission:

1. **Live Site URL**: https://your-site.netlify.app
2. **GitHub Repository**: https://github.com/username/smartspend-website
3. **Figma Design**: [Your Figma link]

### Include in Your Report:
- Screenshots of all pages
- Performance metrics from Lighthouse
- Deployment process documentation
- Any challenges faced and solutions

## Support

If you encounter issues:
1. Check Netlify deploy logs
2. Review browser console for errors
3. Verify all dependencies are installed
4. Test build locally first

---

Good luck with your deployment! 🚀
