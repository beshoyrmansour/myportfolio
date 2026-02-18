# Bishoy R Mansour - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features bilingual support (English/Arabic), dark/light theme, rich animations, and full WCAG 2.1/2.2 Level AA accessibility compliance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Internationalization**: Full English/Arabic support with RTL layout
- **Theme Support**: Dark/light mode with system preference detection
- **Rich Animations**: Framer Motion animations throughout
- **Accessibility**: WCAG 2.1/2.2 Level AA compliant
- **SEO Optimized**: Complete Open Graph, Twitter Cards, and social media meta tags
- **Responsive Design**: Mobile-first approach with full device support
- **Performance**: Optimized build with static generation where possible

## 📋 Sections

1. **Hero** - Professional introduction with CTAs
2. **About** - Background, experience, and specialties
3. **Skills** - Categorized technical skills and tools
4. **Projects** - Portfolio of 7 featured projects
5. **Contact** - Contact form with validation + social links

## 🛠️ Tech Stack

### Core
- Next.js 16.1.6 (App Router)
- React 19
- TypeScript
- Tailwind CSS

### Key Dependencies
- `next-intl` - Internationalization
- `next-themes` - Theme management
- `framer-motion` - Animations
- `react-hook-form` + `zod` - Form validation
- `lucide-react` - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Development

The development server runs at [http://localhost:3000](http://localhost:3000)

### Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles and CSS variables
│   ├── opengraph-image.tsx # Dynamic OG image
│   └── head.tsx            # Additional meta tags
├── components/
│   ├── navigation.tsx      # Main navigation
│   ├── footer.tsx          # Footer with social links
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── language-switcher.tsx # EN/AR switcher
│   └── providers/
│       └── theme-provider.tsx
├── lib/
│   └── animations.ts       # Framer Motion variants
├── messages/
│   ├── en.json            # English translations
│   └── ar.json            # Arabic translations
├── i18n/
│   └── request.ts         # i18n configuration
├── public/
│   ├── resume/            # Resume PDF
│   ├── site.webmanifest   # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── browserconfig.xml  # IE/Edge config
├── proxy.ts               # Internationalization proxy
└── tailwind.config.js     # Tailwind configuration
```

## 🎨 Customization

### Colors
Theme colors are defined in `app/globals.css` using CSS variables:
- Primary: `#3B82F6` (Blue)
- Adjust light/dark mode colors in the `:root` and `.dark` selectors

### Content
All text content is in `messages/en.json` and `messages/ar.json` for easy translation and updates.

### Projects
Update the projects list in the translations files. Each project includes:
- Name, sector, description
- Role/contribution
- Live URL (if applicable)

## 🔧 Configuration

### Domain
Update `metadataBase` in `app/layout.tsx`:
```typescript
metadataBase: new URL('https://your-domain.com')
```

### Social Links
Update in `components/footer.tsx` and `app/page.tsx` contact section.

### Google Verification
Add your Google site verification code in `app/layout.tsx`:
```typescript
verification: {
  google: "your-verification-code",
}
```

## 📱 Social Media Optimization

The portfolio is optimized for sharing on:
- WhatsApp
- LinkedIn
- Facebook
- Twitter/X
- Telegram
- iMessage
- Medium and other article platforms

### Open Graph Image
Dynamic OG image is generated at `app/opengraph-image.tsx`. It displays:
- Your name and title
- Experience badge
- Tech stack highlights

### Static Icons
Add favicon files as per `README-ICONS.md` guide.

## ♿ Accessibility

This portfolio follows WCAG 2.1/2.2 Level AA standards:
- Proper semantic HTML
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Skip to main content link
- Screen reader friendly
- Form validation with proper error handling

## 📊 Performance

- **Build**: Optimized production build with static generation
- **Images**: Dynamic OG image generation
- **Animations**: Respects `prefers-reduced-motion`
- **Fonts**: Inter font with `display: swap`

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the static files:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform.

### Environment Variables
No environment variables required for basic deployment.

## 📝 Resume

Place your resume PDF at:
```
public/resume/Bishoy-R-Mansour-Resume.pdf
```

The download button in the hero section links to this file.

## 🌐 Internationalization

### Adding a New Language
1. Create `messages/[locale].json` (e.g., `messages/fr.json`)
2. Update `proxy.ts` to include the new locale
3. Update `app/layout.tsx` metadata for the new locale

### RTL Support
Arabic automatically uses RTL layout. Add more RTL languages in the layout:
```typescript
dir={['ar', 'he', 'fa'].includes(locale) ? 'rtl' : 'ltr'}
```

## 🐛 Troubleshooting

### Build Warnings
- Workspace root warning: Add `turbopack.root` to `next.config.ts` if needed
- Missing icons: Follow `README-ICONS.md` to generate favicons

### Development Issues
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

## 📄 License

This portfolio is personal property. Feel free to use the structure and code as inspiration for your own portfolio.

## 👤 Author

**Bishoy R Mansour**
- Email: beshoy.r.mansour@gmail.com
- LinkedIn: [beshoy-r-mansour](https://www.linkedin.com/in/beshoy-r-mansour/)
- GitHub: [beshoyrmansour](https://github.com/beshoyrmansour)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
