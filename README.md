# Dynamic Teen Coalition (DTC) Website

A modern, animated website for the Dynamic Teen Coalition built with Next.js, React, and Framer Motion. This project showcases DTC's leadership team, certificates program, and mission with beautiful animations, responsive design, and modern UI components.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and excellent color contrast
- **Responsive**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Built-in theme switching with floating navigation and proper contrast
- **Animations**: Smooth scroll animations and interactive elements using Framer Motion
- **Component Library**: Comprehensive UI component library built with Radix UI and Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for fast loading and smooth interactions
- **Data Centralization**: All content organized in separate data files for easy management
- **Floating Navigation**: Modern bottom-centered navigation with tooltips
- **Real Team Photos**: Actual profile pictures for all board members and ambassadors
- **Accessibility**: Proper color contrast and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion (latest)
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Package Manager**: pnpm (exclusively)
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form with Zod validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (required - this project uses pnpm exclusively)

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
│   └── leadership.ts     # Leadership team data with images
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── public/              # Static assets (profile pictures)
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
- **`data/leadership.ts`**: Leadership team data (Co-Chairs, Board Members, Ambassadors) with image paths
- **`data/certificates.ts`**: Certificate program levels and requirements
- **`data/discord.ts`**: Discord invite link

### Leadership Team Structure
The leadership team is organized into three categories:

1. **DTC Co-Chairs**: Strategic leadership and global policy initiatives
2. **DTC Board**: Operational oversight and key initiatives
3. **DTC Ambassadors**: Global representation and youth engagement

### Adding New Team Members
To add a new team member:

1. Add their profile picture to the `public/` directory
2. Update `data/leadership.ts` with their information:
   ```typescript
   {
     id: "unique-id",
     name: "Full Name",
     role: "DTC Role",
     location: "Location",
     description: "Bio description",
     achievements: ["Achievement 1", "Achievement 2"],
     expertise: ["Skill 1", "Skill 2"],
     iconName: "IconName", // Lucide icon name
     image: "/profilepic.webp", // Path to image in public/
     color: "from-color-500 to-color-500", // Tailwind gradient
     // ... other properties
   }
   ```

### Styling
- **Tailwind CSS**: All styling is done with Tailwind CSS classes
- **Theme**: Customize colors in `tailwind.config.ts`
- **Animations**: Modify animations in individual components
- **Color Contrast**: Optimized for both light and dark modes

### Components
- **UI Components**: Located in `components/ui/`
- **Custom Components**: Add new components in `components/`
- **Navigation**: Floating navbar in `components/navbar.tsx`
- **Theme Toggle**: Theme switching in `components/theme-toggle.tsx`

## 📜 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## 🔧 Configuration Files

- **`tailwind.config.ts`**: Tailwind CSS configuration with custom color palette
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

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
pnpm run dev --port 3001
```

**Dependencies not installing:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**TypeScript errors:**
```bash
pnpm run lint
```

### Performance Optimization

- Images are optimized using Next.js Image component
- Animations are hardware-accelerated with Framer Motion
- CSS is purged in production builds
- Components are lazy-loaded where appropriate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly in both light and dark modes
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is part of the Dynamic Teen Coalition initiative.

## 🆘 Support

For support, please contact the DTC development team or create an issue in the repository.

---

**Built with ❤️ by the Dynamic Teen Coalition team**

