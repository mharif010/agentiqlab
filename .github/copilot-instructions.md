# Agentiq Lab SaaS Website - Development Instructions

This is a premium SaaS website for Agentiq lab, an AI-powered workflow automation platform. Built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion for animations.

## Project Overview

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment Ready**: SEO optimized, accessibility compliant

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── sections/          # Full-width page sections
│   ├── ui/                # Base UI components
│   └── shared/            # Shared components (Header, Footer, etc)
├── lib/                   # Utility functions
└── styles/                # Design system tokens
```

## Key Features

- ✅ Responsive design (mobile-first)
- ✅ Performance optimized (image optimization, lazy loading)
- ✅ SEO ready (meta tags, structured data)
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Smooth animations with Framer Motion
- ✅ Dark mode optimized
- ✅ Reusable component system

## Design System

- **Colors**: Electric blue accents, dark mode base, soft gradients
- **Typography**: Modern sans-serif (Inter), large headlines
- **Spacing**: 4px base unit (Tailwind scale)
- **Components**: Buttons, Cards, Badges, Inputs, etc.

## Sections Included

1. Hero with CTA
2. Trusted By (Social Proof)
3. Product Overview
4. Automation Showcase
5. Core Features
6. How It Works
7. Use Cases
8. Comparison
9. Testimonials
10. Pricing
11. FAQ
12. Final CTA
13. Footer & Navigation

## Development Progress

- [x] Project scaffolding
- [x] Design system setup
- [x] Base components created
- [ ] Section components development
- [ ] Animations implementation
- [ ] Content integration
- [ ] Performance optimization
- [ ] Deployment

## Deployment

Ready to deploy on Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```
