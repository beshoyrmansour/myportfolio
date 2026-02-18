# 🚀 Deployment Checklist for Bishoy R Mansour Portfolio

Use this checklist before deploying your portfolio to production.

## ✅ Pre-Deployment Tasks

### 1. Content Review
- [ ] Verify all personal information is correct
- [ ] Check all project links are working
- [ ] Ensure resume PDF is up-to-date (`public/resume/Bishoy-R-Mansour-Resume.pdf`)
- [ ] Review English translations (`messages/en.json`)
- [ ] Review Arabic translations (`messages/ar.json`)

### 2. SEO & Social Media
- [ ] Update `metadataBase` URL in `app/layout.tsx` with your actual domain
- [ ] Add Google site verification code (get from [Google Search Console](https://search.google.com/search-console))
- [ ] Test Open Graph image appearance (use [OpenGraph.xyz](https://www.opengraph.xyz/))
- [ ] Verify Twitter Card (use [Twitter Card Validator](https://cards-dev.twitter.com/validator))
- [ ] Test LinkedIn preview (share on LinkedIn and check)
- [ ] Test WhatsApp preview (send link to yourself)

### 3. Icons & Favicons
- [ ] Generate favicon files (follow `README-ICONS.md`)
- [ ] Add all required favicon files to `/public`:
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`
  - `safari-pinned-tab.svg`
  - `mstile-150x150.png`

### 4. Performance & Optimization
- [ ] Run production build: `npm run build`
- [ ] Check for build errors and warnings
- [ ] Test all pages in production mode
- [ ] Verify dark/light theme switching works
- [ ] Test language switching (EN ↔ AR)
- [ ] Check mobile responsiveness
- [ ] Test form validation
- [ ] Verify all animations work smoothly

### 5. Accessibility Testing
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Verify focus states are visible
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Check color contrast ratios
- [ ] Test with browser zoom at 200%
- [ ] Verify skip-to-content link works

### 6. Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 7. Configuration
- [ ] Update domain in `app/layout.tsx` metadataBase
- [ ] Update Twitter handle if you have one (`twitter.creator`)
- [ ] Verify email in contact section: `beshoy.r.mansour@gmail.com`
- [ ] Check GitHub link: `https://github.com/beshoyrmansour`
- [ ] Check LinkedIn link: `https://www.linkedin.com/in/beshoy-r-mansour/`

## 🌐 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Custom Domain (if you have one)**
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings > Domains
   - Add your custom domain

### Option 2: Netlify

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Other Platforms

Build command: `npm run build`
Output directory: `.next`
Install command: `npm install`

## 📊 Post-Deployment Tasks

### 1. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible: `https://yourdomain.com/robots.txt`
- [ ] Test site in Google Search Console
- [ ] Set up Google Analytics (optional)

### 2. Social Media
- [ ] Share on LinkedIn with proper preview
- [ ] Share on Twitter/X
- [ ] Update LinkedIn profile with portfolio link
- [ ] Update GitHub profile README with portfolio link

### 3. Monitoring
- [ ] Set up uptime monitoring (optional)
- [ ] Enable Vercel/Netlify analytics (optional)
- [ ] Monitor Core Web Vitals in Google Search Console

### 4. Final Checks
- [ ] Test all external links
- [ ] Verify contact form submission
- [ ] Test resume download button
- [ ] Check page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Verify SSL certificate is active
- [ ] Test on multiple devices

## 🔒 Security Checklist

- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set proper security headers
- [ ] Verify no sensitive information is exposed
- [ ] Check for any console errors in production

## 📝 Optional Enhancements

- [ ] Set up custom email with your domain
- [ ] Add Google Analytics or Plausible for privacy-friendly analytics
- [ ] Set up contact form backend (EmailJS, Formspree, or custom API)
- [ ] Add blog section (optional)
- [ ] Enable PWA features
- [ ] Add more projects as you complete them

## 🎯 Success Metrics

After deployment, monitor:
- Page load time (target: < 3 seconds)
- Lighthouse score (target: 90+ for all metrics)
- Mobile usability (target: 100% in Google Search Console)
- Accessibility score (target: 100)

## 📞 Support

If you encounter issues:
1. Check build logs for errors
2. Review Next.js documentation
3. Check Vercel/Netlify status page
4. Review this project's README.md

---

**Last Updated**: February 2026
**Portfolio Owner**: Bishoy R Mansour
**Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
