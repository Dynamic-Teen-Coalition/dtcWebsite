# Dynamic Teen Coalition (DTC) Website

A modern, responsive website for the Dynamic Teen Coalition - a youth-led movement reshaping digital governance and teen representation in global policy-making.

## Overview

The Dynamic Teen Coalition (DTC) emerged from a single question at IGF 2022: "Why are there no teens in the UN 'Youth' track?" This website showcases our journey through three transformative waves of change, our partnerships, achievements, and the ongoing work to ensure teen voices are heard in digital governance.

## Features

- **Modern Design**: Beautiful, responsive UI with dark/light mode support
- **Interactive Animations**: Smooth transitions and engaging micro-interactions
- **Performance Optimized**: Fast loading with Next.js 15 and optimized images
- **Accessibility First**: WCAG compliant design patterns
- **Mobile Responsive**: Seamless experience across all devices
- **TypeScript**: Full type safety and better development experience

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dtcWebsite
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

For detailed setup instructions, see [QUICK_START.md](./QUICK_START.md).

## Project Structure

```
dtcWebsite/
├── app/                    # Next.js app directory
│   ├── certificates/       # Certificates page
│   ├── dgn/               # Digital Governance Network page
│   ├── leadership/        # Leadership page
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── data/                 # Content and data files
│   ├── certificates.ts   # Certificate data
│   ├── discord.ts        # Discord configuration
│   ├── home.ts          # Home page content
│   └── leadership.ts    # Leadership data
├── public/              # Static assets
│   ├── *.webp           # Optimized images
│   └── *.png            # Logo and graphics
└── styles/              # Global styles
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |

## Key Pages

- **Home**: Overview of DTC's mission, waves of change, and impact
- **Leadership**: Board members and ambassadors
- **Certificates**: DTC certification programs
- **DGN**: Digital Governance Network partnerships

## Content Management

All content is centralized in the `data/` directory:

- **`data/home.ts`**: Homepage content, waves, works, and activities
- **`data/leadership.ts`**: Leadership team data with image paths
- **`data/certificates.ts`**: Certificate program levels and requirements
- **`data/discord.ts`**: Discord invite link

### Adding New Team Members

1. Add profile picture to `public/` directory
2. Update `data/leadership.ts` with member information
3. Follow the existing data structure for consistency

## Customization

### Styling
- **Tailwind CSS**: All styling uses Tailwind CSS classes
- **Theme**: Customize colors in `tailwind.config.ts`
- **Design System**: Consistent color palette and typography

### Components
- **UI Components**: Located in `components/ui/`
- **Custom Components**: Add new components in `components/`
- **Animations**: Modify using Framer Motion

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Start production server:
   ```bash
   pnpm run start
   ```

## Troubleshooting

### Common Issues

**Site won't load:**
```bash
rm -rf .next && pnpm run dev
```

**Dependencies broken:**
```bash
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

**Port 3000 busy:**
```bash
pnpm run dev --port 3001
```


## Support
- **Documentation**: Check [QUICK_START.md](./QUICK_START.md)
- **Issues**: Report bugs and request features via GitHub Issues
- **Discord**: Join our community at [DTC Friends Discord](https://discord.gg/dtc)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Dynamic Teen Coalition** - Reshaping the system, one teen voice at a time.