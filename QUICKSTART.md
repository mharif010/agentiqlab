# Agentiq Lab - Quick Start Guide

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:
- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm or yarn package manager
- VS Code (already open)

### Step 1: Install Dependencies

Open a terminal in VS Code (Ctrl+`) and run:

```bash
npm install
```

If you encounter PowerShell execution policy errors, you can:
1. Run VS Code as Administrator, OR
2. Use Command Prompt instead of PowerShell:
   - Press `Ctrl + Shift + P`
   - Type "Terminal: Select Default Profile"
   - Choose "Command Prompt"

### Step 2: Start Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Explore the Website

Visit these sections:
- **Hero** - Landing with value proposition
- **Features** - Core product features
- **Pricing** - Tiered pricing plans
- **FAQ** - Common questions
- And more!

## 📁 Project Structure

```
agentiq-lab/
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Main homepage
│   │   ├── layout.tsx         ← Root layout
│   │   └── globals.css        ← Global styles
│   ├── components/
│   │   ├── sections/          ← Page sections (Hero, Features, etc)
│   │   ├── ui/                ← Reusable UI components
│   │   └── shared/            ← Header, Footer
│   └── lib/                   ← Utilities
├── public/                    ← Static assets
├── tailwind.config.ts         ← Tailwind configuration
├── next.config.js             ← Next.js configuration
├── tsconfig.json              ← TypeScript configuration
└── package.json               ← Dependencies

```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts` and modify the `colors` section:

```typescript
colors: {
  accent: {
    500: '#your-color',
    // ...
  }
}
```

### Update Content

Edit components in `src/components/sections/`:

- **Hero**: Change headline, description, CTA
- **Pricing**: Update plans, features, prices
- **Testimonials**: Add customer quotes
- **FAQ**: Add your questions and answers

### Add New Sections

1. Create file: `src/components/sections/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page layout

## 🧪 Testing & Building

```bash
# Check for errors
npm run type-check

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-deploys on every push

### Deploy to Other Hosting

The project is optimized for any Node.js hosting:

```bash
npm run build
npm start
```

## 🤝 Need Help?

- Check the README.md for detailed documentation
- Review component files for examples
- See tailwind.config.ts for design tokens
- Check globals.css for CSS utilities

## ✨ Key Features

✅ Premium design system with dark mode
✅ Fully responsive (mobile-first)
✅ Smooth animations with Framer Motion
✅ SEO optimized with meta tags
✅ WCAG 2.1 Accessibility compliant
✅ Production-ready code
✅ TypeScript for type safety

---

### Next Steps

1. Run `npm install`
2. Run `npm run dev`
3. Open http://localhost:3000
4. Customize sections as needed
5. Deploy to Vercel or your hosting provider

Happy building! 🚀
