# Jones Brothers Junk Removal Website

A modern, performant website for Jones Brothers Junk Removal built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js Image Optimization** - Automatic image optimization

## Features

- ✅ Server-side rendering for optimal SEO
- ✅ Responsive design with mobile-first approach
- ✅ Optimized images with Next.js Image component
- ✅ Structured data for search engines
- ✅ Modern component architecture
- ✅ Type-safe with TypeScript
- ✅ Fast performance with code splitting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Netlify will use the `netlify.toml` configuration
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

## Project Structure

```
jonesbrothers/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Header.tsx      # Header with navigation
│   ├── MobileMenu.tsx  # Mobile navigation menu
│   ├── Footer.tsx      # Footer component
│   ├── ReviewCard.tsx  # Review card component
│   ├── IntroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhatWeHaulSection.tsx
│   ├── ReviewsSection.tsx
│   └── StructuredData.tsx
├── public/
│   └── images/         # Static images
└── package.json
```

## Migration from Vanilla HTML/CSS/JS

This project was migrated from a vanilla HTML/CSS/JavaScript + jQuery stack to a modern Next.js stack. Key improvements:

- Removed jQuery dependency (30KB+ saved)
- Component-based architecture for maintainability
- TypeScript for type safety
- Automatic code splitting and optimization
- Better SEO with server-side rendering
- Modern development experience

## License

© 2024 Jones Brothers Junk Removal. All rights reserved.
