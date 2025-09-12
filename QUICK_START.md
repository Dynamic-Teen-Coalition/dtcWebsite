# Quick Start Guide

## Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **pnpm** - [Install pnpm](https://pnpm.io/installation)

## 🚀 Get Started in 3 Steps

### 1. Clone & Navigate
```bash
git clone <your-repo-url>
cd dtcWebsite
```

### 2. Setup (Choose One)

**Option A: Automated Setup (Recommended)**

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```bash
setup-windows.bat
```

**Option B: Manual Setup**
```bash
pnpm install
```

### 3. Start Development
```bash
pnpm run dev
```

### 4. Open Browser
Navigate to: `http://localhost:3000`

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |
| `pnpm install` | Install dependencies |

---

## 🔧 Quick Fixes

### If the site won't load:
```bash
# Clear cache and restart
rm -rf .next
pnpm run dev
```

### If dependencies are broken:
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### If port 3000 is busy:
```bash
# Use different port
pnpm run dev --port 3001
```

### If you encounter any issues with the scripts:
Open an issue on Github with details about your environment and the error message.

---

## 📁 Key Files & Directories

- **`data/`** - All content (leadership, certificates, home content)
- **`components/`** - React components and UI elements
- **`app/`** - Next.js pages and layouts
- **`public/`** - Static assets (images, profile pictures)
- **`tailwind.config.ts`** - Styling configuration
- **`package.json`** - Dependencies and scripts

---

## 🆘 Need Help?

- Check `TROUBLESHOOTING.md` for common issues
- Read `README.md` for detailed documentation
- Ensure Node.js 18+ and pnpm are installed
- Verify all profile pictures are in the `public/` directory

---

**That's it! Happy coding! 🎉**
