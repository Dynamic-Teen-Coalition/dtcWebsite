# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Setup (Choose One)

**Option A: Automated Setup**
```bash
# macOS/Linux
./setup.sh

# Windows
setup-windows.bat
```

**Option B: Manual Setup**
```bash
npm install
```

### 2. Start Development
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:3000`

---

## 📋 Essential Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm install` | Install dependencies |

---

## 🔧 Quick Fixes

### If the site won't load:
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### If dependencies are broken:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### If port 3000 is busy:
```bash
# Use different port
npm run dev -- -p 3001
```

---

## 📁 Key Files

- `app/page.tsx` - Main homepage
- `components/ui/` - UI components
- `tailwind.config.ts` - Styling configuration
- `package.json` - Dependencies and scripts

---

## 🆘 Need Help?

- Check `TROUBLESHOOTING.md` for common issues
- Read `README.md` for detailed documentation
- Ensure Node.js 18+ is installed

---

**That's it! Happy coding! 🎉** 