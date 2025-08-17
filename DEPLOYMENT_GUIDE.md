# Deployment Guide for aivesting.net

## Option 1: Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Prepare Your Project
1. Make sure all changes are committed to your Git repository
2. Ensure your project builds successfully:
   ```bash
   npm run build
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Step 3: Connect Your Domain
1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your domain: `aivesting.net`
4. Vercel will provide you with DNS records to configure

### Step 4: Configure DNS Records
Add these records to your domain registrar's DNS settings:

**For Apex Domain (aivesting.net):**
- Type: A
- Name: @
- Value: 76.76.19.76

**For www subdomain (www.aivesting.net):**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**Alternative: Use CNAME for apex domain (if supported):**
- Type: CNAME
- Name: @
- Value: cname.vercel-dns.com

### Step 5: Wait for Propagation
DNS changes can take up to 48 hours to propagate globally.

---

## Option 2: Deploy to Netlify

### Step 1: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy site"

### Step 2: Connect Domain
1. Go to "Domain management"
2. Add custom domain: `aivesting.net`
3. Configure DNS records as provided by Netlify

---

## Option 3: Deploy to GitHub Pages

### Step 1: Update Vite Config
Add this to your `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

### Step 2: Deploy
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: Deploy from a branch
4. Branch: main, folder: / (root)
5. Add GitHub Actions workflow for automatic deployment

---

## Option 4: Traditional Web Hosting

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Upload Files
Upload the contents of the `dist` folder to your web hosting provider's public_html directory.

### Step 3: Configure Domain
Point your domain's A record to your hosting provider's IP address.

---

## Post-Deployment Checklist

✅ Website loads correctly at aivesting.net
✅ All pages and routes work properly
✅ Images and assets load correctly
✅ Mobile responsiveness works
✅ Performance is acceptable
✅ SSL certificate is active (https://)
✅ www.aivesting.net redirects to aivesting.net (or vice versa)

## Troubleshooting

### Common Issues:
1. **404 errors on page refresh**: Ensure your hosting provider supports SPA routing
2. **Assets not loading**: Check that the base path is configured correctly
3. **Domain not resolving**: Wait for DNS propagation or check DNS configuration
4. **SSL issues**: Most modern hosting providers offer free SSL certificates

### Support:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- GitHub Pages: [docs.github.com/en/pages](https://docs.github.com/en/pages)

---

## Recommended: Vercel Deployment

Vercel is recommended because it:
- Offers free hosting
- Automatically handles SSL certificates
- Provides excellent performance with CDN
- Supports custom domains easily
- Has great developer experience
- Automatically deploys on Git pushes 