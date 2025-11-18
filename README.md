# ��� Bayou Boxables

A premium container home rental platform showcasing unique Louisiana bayou accommodations. Built with modern web technologies and optimized for performance, accessibility, and user experience.

��� **Live Site**: [bayouboxables.com](https://bayouboxables.com)

## ✨ Features

### ��� Core Functionality
- **Property Listings**: Showcase unique container homes with detailed amenities
- **Interactive Search**: Real-time filtering by location, dates, guests, and price
- **Visual Gallery**: High-quality image carousels with lazy loading optimization
- **Booking System**: Integrated reservation workflow with calendar selection
- **Investor Portal**: Dedicated forms for investment opportunities
- **Contact System**: Multi-channel communication via Formspree integration

### ⚡ Performance Optimizations
- **Million.js Integration**: React components render 33-78% faster
  - SearchBar: ~56% performance improvement
  - Navigation: ~71% faster rendering
  - AmenitiesSection: ~78% speed boost
  - ExploreFilters: ~33% optimization
  - InvestorForm: ~65% faster loading
- **Image Optimization**: Lazy loading with error handling and responsive sizing
- **Bundle Optimization**: Tree-shaking and code splitting for minimal load times

### ��� Design & Accessibility
- **Brand Identity**: Hunter green and golden orange Louisiana-inspired theme
- **WCAG Compliance**: Full accessibility with proper ARIA labels and contrast ratios
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Typography**: Google Fonts integration (Inter, Playfair Display, Raleway)

## ��� Tech Stack

### Frontend Framework
- **Astro 5.15.3**: Static site generation with React integration
- **React 19.2.0**: Interactive components with modern hooks and patterns
- **TypeScript**: Type-safe development experience

### Styling & UI
- **Tailwind CSS 4.1.16**: Modern utility-first styling with custom theme
- **Radix UI**: Accessible component primitives for forms and interactions
- **Lucide Icons**: Beautiful, customizable SVG icon library

### Performance & Optimization
- **Million.js 3.1.11**: Automatic React performance optimization
- **Vite**: Fast development server and optimized production builds

### Deployment & Infrastructure
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Custom Domain**: Professional domain with Cloudflare DNS management
- **CI/CD Pipeline**: Automated testing, building, and deployment

## ��� Project Structure

```text
bayou-boxables/
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ui/            # Base UI components (Button, Card, Dialog)
│   │   ├── amenities-list.tsx
│   │   ├── booking-widget.tsx
│   │   ├── image-gallery.tsx
│   │   ├── navigation.tsx
│   │   ├── search-bar.tsx
│   │   └── investor-form.tsx
│   ├── layouts/
│   │   └── Layout.astro    # Base page layout with SEO meta
│   ├── pages/             # Route-based pages
│   │   ├── index.astro    # Homepage with hero and features
│   │   ├── explore.astro  # Property search and listings
│   │   ├── invest.astro   # Investor information and forms
│   │   └── contact.astro  # Contact forms and information
│   ├── styles/
│   │   └── global.css     # Tailwind configuration and custom styles
│   └── lib/
│       └── utils.ts       # Utility functions and helpers
├── astro.config.mjs       # Astro and Million.js configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## ��� Development Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install project dependencies                     |
| `npm run dev`             | Start development server at `localhost:4321`    |
| `npm run build`           | Build production site to `./dist/`             |
| `npm run preview`         | Preview production build locally                 |

## ��� Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions workflow.

### Manual Deployment
```bash
# Build the project
npm run build

# Commit and push changes
git add .
git commit -m "Deploy updates"
git push origin main
```

## ��� Performance Metrics

### Million.js Optimizations (Active)
- **SearchBar Component**: 56% faster rendering
- **Navigation Component**: 71% performance improvement  
- **AmenitiesSection**: 78% speed boost
- **ExploreFilters**: 33% optimization
- **InvestorForm**: 65% faster loading

### Accessibility Score
- **WCAG 2.1 AA Compliant**: Full accessibility compliance
- **Color Contrast**: Meets minimum 4.5:1 ratio requirements
- **Touch Targets**: All interactive elements meet 44px minimum
- **Screen Reader Support**: Complete ARIA labeling and semantic HTML

## ��� Brand Guidelines

### Color Palette (OKLCH Values)
- **Hunter Green**: `oklch(0.45 0.1 140)` - Primary brand color
- **Golden Orange**: `oklch(0.7 0.15 65)` - Accent and highlights
- **Forest Green**: `oklch(0.35 0.12 140)` - Dark variations
- **Warm Cream**: `oklch(0.95 0.02 80)` - Background tones

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, readable)
- **Accents**: Raleway (modern, friendly)

## ��� Support & Contact

For technical issues or feature requests:
- **GitHub Issues**: Report bugs and request features
- **Business Inquiries**: Contact via the website's contact form
- **Investment Opportunities**: Use the dedicated investor portal

## ��� License

This project is proprietary software developed for Bayou Boxables. All rights reserved.

---

*Built with ❤️ in Louisiana • Powered by Astro & Million.js*
