# Quick Start Guide


## Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)


### 1. Clone & Navigate
```bash
git clone <your-repo-url>
cd dtcWebsite
```

### 2. Run Setup Script

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```bash
setup-windows.bat
```

### If you encounter any issues with the scripts, do open a issue on Github. 

### 3. Start Development
```bash
pnpm run dev
```


## 🛠️ Available Commands

```bash
pnpm run dev     # Start development server
pnpm run build   # Build for production
pnpm run start   # Start production server
pnpm run lint    # Run ESLint
```

## 📁 Key Files & Directories

- **`data/`** - All content (leadership, certificates, etc.)
- **`components/`** - React components
- **`app/`** - Next.js pages
- **`public/`** - Static assets
