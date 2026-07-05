# Arnav Sharma — Portfolio

A premium, production-ready portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **React Three Fiber**.

## ✨ Features

- **Interactive 3D Hero** — Neural network particle visualization using React Three Fiber with mouse-reactive parallax
- **Premium Animations** — Buttery smooth spring animations, staggered reveals, and magnetic hover effects powered by Framer Motion
- **Responsive Design** — Fully responsive across all breakpoints (320px → 1440px+)
- **Accessibility** — Skip navigation, keyboard focus indicators, `prefers-reduced-motion` support, semantic HTML, ARIA labels
- **SEO Optimized** — Open Graph tags, Twitter cards, JSON-LD structured data, sitemap, robots.txt
- **Performance** — GPU-accelerated animations, lazy-loaded 3D scene, instanced rendering, code splitting
- **Dark Theme** — Elegant black/charcoal palette with brass/gold accents and subtle Ferrari Red highlights

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15 | App Router, SSR, Image Optimization |
| React | 19 | UI Components |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12 | Animations |
| React Three Fiber | 9 | 3D Graphics |
| Three.js | 0.185 | WebGL Rendering |
| Lucide React | 1 | Icons |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
arnav-portfolio/
├── app/
│   ├── globals.css          # Design system & base styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (section composition)
│   ├── robots.ts            # Programmatic robots.txt
│   └── sitemap.ts           # Programmatic sitemap
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── TechStrip.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Publications.tsx
│   │   ├── Awards.tsx
│   │   ├── OrbDivider.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── three/               # Three.js components
│   │   ├── NeuralNetwork.tsx
│   │   └── Scene.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Navbar.tsx
│       ├── RevealOnScroll.tsx
│       ├── ScrollProgress.tsx
│       ├── SectionHeader.tsx
│       └── Tag.tsx
├── hooks/                   # Custom React hooks
│   ├── useActiveSection.ts
│   ├── useMagneticHover.ts
│   ├── useReducedMotion.ts
│   └── useScrollProgress.ts
├── lib/                     # Constants & data
│   ├── constants.ts
│   └── data.ts
└── public/                  # Static assets
    └── favicon.svg
```

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0b0b0f` | Primary background |
| `ink-2` | `#131318` | Surface backgrounds |
| `ink-3` | `#1b1b22` | Elevated surfaces |
| `paper` | `#ede9e1` | Primary text |
| `paper-dim` | `#918f97` | Secondary text |
| `brass` | `#c9a464` | Primary accent |
| `brass-bright` | `#ddbd85` | Hover accent |
| `ferrari` | `#E10600` | Premium accent (<5% usage) |

### Typography

- **Display**: Newsreader (serif)
- **Body**: IBM Plex Sans
- **Mono**: IBM Plex Mono

## 🌐 Deployment

### Vercel (Recommended)

Push to GitHub and import into [Vercel](https://vercel.com). Zero configuration required.

### Manual

```bash
npm run build
npm run start
```

## 📄 License

© 2026 Arnav Sharma. All rights reserved.
