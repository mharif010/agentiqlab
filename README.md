# Agentiq Lab - Premium SaaS Website

A modern, high-conversion SaaS website for Agentiq Lab, built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Premium Design System** - Modern, elegant, and accessible UI components
- **Responsive Layout** - Fully optimized for mobile, tablet, and desktop
- **Performance Optimized** - Fast loading, smooth animations, excellent Core Web Vitals
- **SEO Ready** - Meta tags, structured data, and semantic HTML
- **Accessibility Compliant** - WCAG 2.1 Level AA compliant
- **Smooth Animations** - Subtle, performance-friendly transitions with Framer Motion
- **Dark Mode** - Beautiful dark theme optimized for SaaS
- **Production Ready** - Code splitting, image optimization, and best practices

## 📋 Sections Included

1. **Hero** - Compelling value proposition with CTA
2. **Trusted By** - Social proof with company logos and metrics
3. **Features** - Core product features with icons
4. **How It Works** - 4-step process visualization
5. **Use Cases** - Industry-specific automation examples
6. **Pricing** - Tiered pricing plans with toggle
7. **Testimonials** - Customer success stories
8. **FAQ** - Accordion-based frequently asked questions
9. **Final CTA** - Last conversion push
10. **Header & Footer** - Navigation and links

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10.18
- **Language**: TypeScript 5.4
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd agentiq-lab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Full-width page sections
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── ui/                # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Section.tsx
│   └── shared/            # Shared components
│       ├── Header.tsx
│       └── Footer.tsx
├── styles/                # Design system tokens
└── lib/                   # Utility functions

next.config.js            # Next.js configuration
tailwind.config.ts        # Tailwind configuration
tsconfig.json             # TypeScript configuration
```

## 🎨 Design System

### Color Palette

- **Primary**: Electric Blue (#0ea5e9)
- **Accent**: Purple (#8b61ff)
- **Dark Base**: #0f172a
- **Text**: #f8f7ff
- **Text Secondary**: #cbd5e1

### Typography

- **Font**: Inter (sans-serif)
- **Headings**: Bold, large sizes
- **Line Height**: 1.2 for headings, 1.6 for body
- **Letter Spacing**: -0.02em for headings

### Components

All components are reusable and accept customization through props:

- **Button**: Primary, secondary, and outline variants
- **Card**: Default, glass, and gradient variants
- **Badge**: Multiple color variants
- **Section**: Wrapper for content sections

## 📱 Responsive Design

Breakpoints:
- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are mobile-first and fully responsive.

## ⚡ Performance

- Image Optimization: Next.js Image component
- Code Splitting: Automatic with Next.js App Router
- Lazy Loading: Components load on demand
- CSS Optimization: Tailwind CSS purging
- Font Optimization: Google Fonts with `next/font`

### Lighthouse Scores (Target)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔒 Security & Compliance

- **HTTPS**: Ready for production deployment
- **CSP**: Content Security Policy headers
- **CORS**: Properly configured
- **GDPR**: Privacy policy and cookie consent ready
- **Accessibility**: WCAG 2.1 Level AA compliant

## 📝 Development

### Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Framer Motion for animations

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.agentiqlab.com
```

## 📊 Analytics & Conversion

The website is optimized for:

- **Conversion**: Clear CTAs, compelling copy, social proof
- **Trust**: Security badges, testimonials, metrics
- **Speed**: Fast loading, smooth interactions
- **Accessibility**: Semantic HTML, keyboard navigation

## 🤝 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to the page layout

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette.

### Adding Content

Edit individual section components to update:
- Headlines and descriptions
- Feature lists
- Pricing plans
- Testimonials
- FAQ items

## 📄 License

© 2024 Agentiq Lab. All rights reserved.

## 🆘 Support

For issues or questions:
- Check the [FAQ](#faq) section on the website
- Visit our documentation
- Contact: support@agentiqlab.com

---

Built with ❤️ for modern SaaS companies.
