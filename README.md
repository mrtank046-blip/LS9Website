# LS9 Website

**Built For Progression**

A modern, minimal e-commerce website for LS9 - a fashion brand focused on heavyweight essentials for movement, discipline, and modern identity.

## Features

- **Hero Section**: Bold, immersive landing with call-to-action buttons
- **Collection Showcase**: Dynamic grid display of products with hover effects
- **Philosophy Section**: Brand messaging and core values
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth transitions and pulse effects

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React version

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main website component
│   └── globals.css      # Global styles and tailwind
```

## Customization

- **Hero Section**: Edit the main title, tagline, and button text in the hero section
- **Products**: Modify the product array in the Collection Section to add/remove items
- **Colors**: Adjust Tailwind classes (zinc-900, zinc-950, etc.) for different color schemes
- **Social Links**: Update footer links with actual URLs

## Deployment

Deploy easily with Vercel:

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect with Vercel for automatic deployments.

## License

All rights reserved - LS9
