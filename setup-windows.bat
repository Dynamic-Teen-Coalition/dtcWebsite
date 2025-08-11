@echo off
REM Dynamic Teen Coalition Website Setup Script for Windows
REM This script automates the setup process for the DTC website on Windows

echo 🚀 Dynamic Teen Coalition Website Setup Script
echo.

REM Check if Node.js is installed
echo [INFO] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18 or higher.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check Node.js version
for /f "tokens=1,2,3 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%
if %NODE_VERSION% LSS 18 (
    echo [ERROR] Node.js version is too old. Please install Node.js 18 or higher.
    pause
    exit /b 1
) else (
    echo [SUCCESS] Node.js version is compatible
)

REM Check package manager
echo [INFO] Checking package manager...
where pnpm >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Using pnpm as package manager
    set PACKAGE_MANAGER=pnpm
) else (
    echo [INFO] Using npm as package manager
    set PACKAGE_MANAGER=npm
)

REM Install dependencies
echo [INFO] Installing dependencies...
%PACKAGE_MANAGER% install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [SUCCESS] Dependencies installed successfully

REM Check for common issues
echo [INFO] Checking for common setup issues...

REM Check if public directory exists
if not exist "public" (
    echo [WARNING] Public directory not found. Creating it...
    mkdir public
)

REM Check if components directory exists
if not exist "components" (
    echo [ERROR] Components directory not found. This is required for the project to work.
    pause
    exit /b 1
)

REM Run build check
echo [INFO] Running build check to ensure everything is working...
%PACKAGE_MANAGER% run build >nul 2>&1
if %errorlevel% equ 0 (
    echo [SUCCESS] Build check passed! Everything is set up correctly.
) else (
    echo [WARNING] Build check failed. This might be due to missing environment variables or other configuration issues.
    echo [INFO] You can still run the development server with: %PACKAGE_MANAGER% run dev
)

REM Show next steps
echo.
echo [SUCCESS] 🎉 Setup completed successfully!
echo.
echo Next steps:
echo 1. Start the development server:
echo    %PACKAGE_MANAGER% run dev
echo.
echo 2. Open your browser and navigate to:
echo    http://localhost:3000
echo.
echo 3. Available commands:
echo    %PACKAGE_MANAGER% run dev    - Start development server
echo    %PACKAGE_MANAGER% run build  - Build for production
echo    %PACKAGE_MANAGER% run start  - Start production server
echo    %PACKAGE_MANAGER% run lint   - Run ESLint
echo.
echo 4. For more information, check the README.md file
echo.
echo [INFO] Happy coding! 🚀
pause 