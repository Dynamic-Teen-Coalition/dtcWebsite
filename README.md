# Dynamic Team Website (DTC)

A modern, animated team website built with Next.js, React, and Framer Motion. This project showcases a dynamic team with beautiful animations, responsive design, and modern UI components.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Built-in theme switching
- **Animations**: Smooth scroll animations and interactive elements using Framer Motion
- **Component Library**: Comprehensive UI component library built with Radix UI and Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Package Manager**: npm/pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **pnpm** (recommended)

You can check your Node.js version with:
```bash
node --version
```

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

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
   npm run dev
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
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
dtcWebsite/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── animated-background.tsx
│   ├── grid-pattern.tsx
│   ├── theme-toggle.tsx
│   └── wave-pattern.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── public/              # Static assets
├── styles/              # Additional styles
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.mjs      # Next.js configuration
```

## 🎨 Customization

### Styling
- **Tailwind CSS**: All styling is done with Tailwind CSS classes
- **Theme**: Customize colors in `tailwind.config.ts`
- **Animations**: Modify animations in individual components

### Content
- **Team Members**: Update team information in `app/page.tsx`
- **Waves/Timeline**: Modify the waves array in the main page component
- **Projects**: Update the works/projects array

### Components
- **UI Components**: Located in `components/ui/`
- **Custom Components**: Add new components in `components/`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**:
   - Ensure all dependencies are installed: `npm install`
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **TypeScript errors**:
   - Check your TypeScript version: `npx tsc --version`
   - Ensure all types are installed: `npm install @types/node @types/react`

3. **Styling issues**:
   - Clear browser cache
   - Restart the development server

### Performance Tips

- Use `npm run build` to check for build-time issues
- Monitor bundle size with `npm run build`
- Optimize images using Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

## 🎯 Next Steps

- [ ] Add more team member profiles
- [ ] Implement contact form functionality
- [ ] Add blog/news section
- [ ] Integrate with CMS for content management
- [ ] Add analytics tracking
- [ ] Implement SEO optimizations

---

**Happy coding! 🚀**