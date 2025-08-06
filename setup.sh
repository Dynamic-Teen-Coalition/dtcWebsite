#!/bin/bash

# Dynamic Teen Coalition Website Setup Script
# This script automates the setup process for the DTC website

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if command_exists node; then
        NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$NODE_VERSION" -ge 18 ]; then
            print_success "Node.js version $(node --version) is compatible"
            return 0
        else
            print_error "Node.js version $(node --version) is too old. Please install Node.js 18 or higher."
            return 1
        fi
    else
        print_error "Node.js is not installed. Please install Node.js 18 or higher."
        return 1
    fi
}

<<<<<<< HEAD
# Function to check and install pnpm
check_and_install_pnpm() {
    if command_exists pnpm; then
        PNPM_VERSION=$(pnpm --version)
        print_success "pnpm version $PNPM_VERSION is installed"
        PACKAGE_MANAGER="pnpm"
        return 0
    else
        print_warning "pnpm is not installed. Installing pnpm..."
        
        # Try to install pnpm using npm
        if command_exists npm; then
            print_status "Installing pnpm using npm..."
            npm install -g pnpm
            if [ $? -eq 0 ]; then
                print_success "pnpm installed successfully"
                PACKAGE_MANAGER="pnpm"
                return 0
            else
                print_error "Failed to install pnpm using npm"
                return 1
            fi
        else
            print_error "Neither npm nor pnpm is installed. Please install Node.js first."
            return 1
        fi
=======
# Function to check package manager
check_package_manager() {
    if command_exists pnpm; then
        print_status "Using pnpm as package manager"
        PACKAGE_MANAGER="pnpm"
    elif command_exists npm; then
        print_status "Using npm as package manager"
        PACKAGE_MANAGER="npm"
    else
        print_error "Neither npm nor pnpm is installed. Please install Node.js first."
        exit 1
>>>>>>> origin/main
    fi
}

# Function to install dependencies
install_dependencies() {
<<<<<<< HEAD
    print_status "Installing dependencies using pnpm..."
    
    # Clear any existing node_modules and lock files
    if [ -d "node_modules" ]; then
        print_status "Removing existing node_modules..."
        rm -rf node_modules
    fi
    
    if [ -f "package-lock.json" ]; then
        print_status "Removing package-lock.json to use pnpm..."
        rm package-lock.json
    fi
    
    # Install dependencies with pnpm
    pnpm install
    
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully using pnpm"
=======
    print_status "Installing dependencies..."
    
    if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
        pnpm install
    else
        npm install
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Dependencies installed successfully"
>>>>>>> origin/main
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Function to check for common issues
check_common_issues() {
    print_status "Checking for common setup issues..."
    
    # Check if .env file exists (if needed)
    if [ ! -f ".env" ] && [ ! -f ".env.local" ]; then
        print_warning "No .env file found. Create one if you need environment variables."
    fi
    
    # Check if public directory exists
    if [ ! -d "public" ]; then
        print_warning "Public directory not found. Creating it..."
        mkdir -p public
    fi
    
    # Check if components directory exists
    if [ ! -d "components" ]; then
        print_error "Components directory not found. This is required for the project to work."
        exit 1
    fi
<<<<<<< HEAD
    
    # Check if data directory exists
    if [ ! -d "data" ]; then
        print_warning "Data directory not found. Creating it..."
        mkdir -p data
    fi
=======
>>>>>>> origin/main
}

# Function to run build check
run_build_check() {
    print_status "Running build check to ensure everything is working..."
    
<<<<<<< HEAD
    pnpm run build > /dev/null 2>&1
=======
    if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
        pnpm run build > /dev/null 2>&1
    else
        npm run build > /dev/null 2>&1
    fi
>>>>>>> origin/main
    
    if [ $? -eq 0 ]; then
        print_success "Build check passed! Everything is set up correctly."
    else
        print_warning "Build check failed. This might be due to missing environment variables or other configuration issues."
<<<<<<< HEAD
        print_status "You can still run the development server with: pnpm run dev"
=======
        print_status "You can still run the development server with: $PACKAGE_MANAGER run dev"
>>>>>>> origin/main
    fi
}

# Function to display next steps
show_next_steps() {
    echo ""
    print_success "🎉 Setup completed successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Start the development server:"
<<<<<<< HEAD
    echo "   pnpm run dev"
=======
    echo "   $PACKAGE_MANAGER run dev"
>>>>>>> origin/main
    echo ""
    echo "2. Open your browser and navigate to:"
    echo "   http://localhost:3000"
    echo ""
    echo "3. Available commands:"
<<<<<<< HEAD
    echo "   pnpm run dev    - Start development server"
    echo "   pnpm run build  - Build for production"
    echo "   pnpm run start  - Start production server"
    echo "   pnpm run lint   - Run ESLint"
=======
    echo "   $PACKAGE_MANAGER run dev    - Start development server"
    echo "   $PACKAGE_MANAGER run build  - Build for production"
    echo "   $PACKAGE_MANAGER run start  - Start production server"
    echo "   $PACKAGE_MANAGER run lint   - Run ESLint"
>>>>>>> origin/main
    echo ""
    echo "4. For more information, check the README.md file"
    echo ""
    print_status "Happy coding! 🚀"
}

# Main setup function
main() {
<<<<<<< HEAD
    echo "🚀 Dynamic Teen Coalition Website Setup Script"
=======
    echo "🚀 Dynamic Team Website Setup Script"
>>>>>>> origin/main
    echo ""
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    check_node_version || exit 1
<<<<<<< HEAD
    check_and_install_pnpm || exit 1
=======
    check_package_manager
>>>>>>> origin/main
    
    # Install dependencies
    install_dependencies
    
    # Check for common issues
    check_common_issues
    
<<<<<<< HEAD
=======
    # Run build check
>>>>>>> origin/main
    run_build_check
    
    # Show next steps
    show_next_steps
}

# Run the main function
main "$@" 