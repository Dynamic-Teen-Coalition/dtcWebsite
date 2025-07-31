# Dynamic Teen Coalition (DTC) Website

A modern, animated website for the Dynamic Teen Coalition built with Next.js, React, and Framer Motion. This project showcases DTC's leadership team, certificates program, and mission with beautiful animations, responsive design, and modern UI components.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Built-in theme switching with floating navigation
- **Animations**: Smooth scroll animations and interactive elements using Framer Motion
- **Component Library**: Comprehensive UI component library built with Radix UI and Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for fast loading and smooth interactions
- **Data Centralization**: All content organized in separate data files for easy management
- **Floating Navigation**: Modern bottom-centered navigation with tooltips

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager)

You can check your Node.js version with:
```bash
node --version
```

To install pnpm globally:
```bash
npm install -g pnpm
```

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

#### For macOS/Linux:
1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd dtcWebsite
   ```

2. **Run the setup script**:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

#### For Windows:
1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd dtcWebsite
   ```

2. **Run the setup script**:
   ```bash
   setup-windows.bat
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Option 2: Manual Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd dtcWebsite
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
dtcWebsite/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main homepage
│   ├── layout.tsx         # Root layout
│   ├── certificates/      # Certificates page
│   │   └── page.tsx
│   ├── leadership/        # Leadership page
│   │   └── page.tsx
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── animated-background.tsx
│   ├── grid-pattern.tsx
│   ├── navbar.tsx        # Floating navigation bar
│   ├── theme-toggle.tsx
│   └── wave-pattern.tsx
├── data/                 # Centralized data files
│   ├── certificates.ts   # Certificate program data
│   ├── discord.ts        # Discord invite link
│   ├── home.ts           # Homepage content
│   └── leadership.ts     # Leadership team data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── public/              # Static assets
├── styles/              # Additional styles
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.mjs      # Next.js configuration
├── setup.sh             # Setup script for macOS/Linux
└── setup-windows.bat    # Setup script for Windows
```

## 🎨 Customization

### Content Management
All content is centralized in the `data/` directory for easy management:

- **`data/home.ts`**: Homepage content, waves, works, and activities
- **`data/leadership.ts`**: Leadership team data (Co-Chairs, Board Members, Ambassadors)
- **`data/certificates.ts`**: Certificate program levels and requirements
- **`data/discord.ts`**: Discord invite link

### Leadership Team Structure
The leadership team is organized into three categories:

1. **DTC Co-Chairs**: Strategic leadership and global policy initiatives
2. **DTC Board**: Operational oversight and key initiatives
3. **DTC Ambassadors**: Global representation and youth engagement

### Styling
- **Tailwind CSS**: All styling is done with Tailwind CSS classes
- **Theme**: Customize colors in `tailwind.config.ts`
- **Animations**: Modify animations in individual components

### Components
- **UI Components**: Located in `components/ui/`
- **Custom Components**: Add new components in `components/`
- **Navigation**: Floating navbar in `components/navbar.tsx`

## 📜 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## 🔧 Configuration Files

- **`tailwind.config.ts`**: Tailwind CSS configuration
- **`tsconfig.json`**: TypeScript configuration
- **`next.config.mjs`**: Next.js configuration
- **`components.json`**: shadcn/ui configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:
   ```bash
   pnpm run build
   ```

2. Start the production server:
   ```bash
   pnpm run start
   ```

