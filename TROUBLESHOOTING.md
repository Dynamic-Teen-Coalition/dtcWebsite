# Troubleshooting Guide

This guide helps you resolve common issues when setting up and running the Dynamic Team Website.

## 🚨 Common Issues

### 1. Module Not Found Errors

**Error**: `Module not found: Can't resolve '@/dtcWebsite/lib/utils'`

**Solution**: 
- This was a path alias issue that has been fixed
- If you encounter similar issues, check that your `tsconfig.json` has the correct path mapping:
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```

### 2. Node.js Version Issues

**Error**: `Node.js version is too old`

**Solution**:
- Install Node.js 18 or higher from [nodejs.org](https://nodejs.org/)
- Check your version: `node --version`

### 3. Package Manager Issues

**Error**: `npm install` fails or `pnpm install` not found

**Solutions**:
- **For npm**: `npm install -g npm@latest`
- **For pnpm**: `npm install -g pnpm`
- Clear cache: `npm cache clean --force` or `pnpm store prune`

### 4. Build Failures

**Error**: `npm run build` fails

**Solutions**:
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```

3. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run build
   ```

### 5. Development Server Issues

**Error**: `npm run dev` fails to start

**Solutions**:
1. Check if port 3000 is in use:
   ```bash
   lsof -ti:3000
   # Kill the process if needed
   kill -9 <PID>
   ```

2. Try a different port:
   ```bash
   npm run dev -- -p 3001
   ```

### 6. Styling Issues

**Issue**: Styles not loading or Tailwind CSS not working

**Solutions**:
1. Check if Tailwind CSS is properly configured in `tailwind.config.ts`
2. Ensure `globals.css` imports Tailwind directives
3. Clear browser cache and restart dev server

### 7. TypeScript Errors

**Error**: TypeScript compilation errors

**Solutions**:
1. Install missing types:
   ```bash
   npm install @types/node @types/react @types/react-dom
   ```

2. Check TypeScript configuration in `tsconfig.json`

### 8. Import Path Issues

**Error**: Cannot resolve module imports

**Solutions**:
1. Use absolute imports with `@/` prefix
2. Check that the file exists in the correct location
3. Ensure `tsconfig.json` path mapping is correct

## 🔧 Performance Issues

### Slow Build Times
- Use `pnpm` instead of `npm` for faster installs
- Consider using `npm ci` for production builds
- Enable Next.js build cache

### Large Bundle Size
- Use dynamic imports for large components
- Optimize images with Next.js Image component
- Remove unused dependencies

## 🌐 Browser Issues

### CSS Not Loading
- Check browser console for errors
- Clear browser cache
- Try incognito/private mode

### JavaScript Errors
- Check browser console for detailed error messages
- Ensure all dependencies are installed
- Check for version conflicts

## 🐛 Debugging Tips

### Enable Verbose Logging
```bash
# For npm
npm run dev --verbose

# For pnpm
pnpm run dev --verbose
```

### Check Dependencies
```bash
# List all dependencies
npm ls

# Check for outdated packages
npm outdated

# Audit for security issues
npm audit
```

### Environment Variables
- Check if `.env.local` file exists
- Ensure environment variables are properly set
- Restart dev server after changing env vars

## 📞 Getting Help

If you're still experiencing issues:

1. **Check the logs**: Look at terminal output and browser console
2. **Search issues**: Check if someone else has reported the same problem
3. **Create an issue**: Provide detailed information including:
   - Error messages
   - Steps to reproduce
   - Your environment (OS, Node.js version, etc.)
   - Screenshots if applicable

## 🛠️ Useful Commands

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Check for issues
npm run lint
npm run build

# Update dependencies
npm update

# Check Node.js version
node --version

# Check npm version
npm --version
```

## 🔄 Reset Everything

If all else fails, you can reset the project:

```bash
# Remove all generated files
rm -rf .next node_modules package-lock.json

# Reinstall everything
npm install

# Start fresh
npm run dev
```
