'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Button } from '../../button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../../navigation-menu';
import { cn } from '../../../../lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Home, Users, Award, GraduationCap, Globe, Mail, FileText } from 'lucide-react';
import { DISCORD_INVITE_LINK } from '../../../../data/discord';

// DTC logo component for the navbar
const DTCLogo = () => {
  return (
    <Image 
      src="/dtclogo.png" 
      alt="Dynamic Teen Coalition Logo" 
      width={64} 
      height={64} 
      className="rounded-lg"
    />
  )
}

const HamburgerIcon = ({ className, isOpen, ...props }: React.SVGAttributes<SVGElement> & { isOpen?: boolean }) => (
  <svg
    className={cn('pointer-events-none transition-all duration-300', className)}
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className={cn(
        "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
        isOpen ? "translate-y-0 rotate-[315deg]" : "-translate-y-[7px]"
      )}
    />
    <path
      d="M4 12H20"
      className={cn(
        "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]",
        isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
      )}
    />
    <path
      d="M4 12H20"
      className={cn(
        "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
        isOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[7px]"
      )}
    />
  </svg>
);

const navIcons = {
  'Home': Home,
  'DGN Program': GraduationCap,
  'Leadership': Users,
  'Certificates': Award,
  'Lifelong Model': Globe,
  'Media': FileText,
  'Contact': Mail,
};

// Types
export interface Navbar03NavLinkItem {
  href: string;
  label: string;
  active?: boolean;
  description?: string;
}

export interface Navbar03NavDropdownItem {
  label: string;
  items: Navbar03NavLinkItem[];
  active?: boolean;
}

export type Navbar03NavItem = Navbar03NavLinkItem | Navbar03NavDropdownItem;

export interface Navbar03Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar03NavItem[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

const isDropdownItem = (item: Navbar03NavItem): item is Navbar03NavDropdownItem =>
  (item as Navbar03NavDropdownItem).items !== undefined;

const markActive = (pathname: string, item: Navbar03NavItem): Navbar03NavItem => {
  if (isDropdownItem(item)) {
    const items = item.items.map((child) => ({
      ...child,
      active: child.active ?? pathname === child.href,
    }));
    const active = item.active ?? items.some((x) => x.active);
    return { ...item, items, active };
  }

  return { ...item, active: item.active ?? pathname === item.href };
};

const flattenNavLinks = (items: Navbar03NavItem[]): Navbar03NavLinkItem[] =>
  items.flatMap((item) => (isDropdownItem(item) ? item.items : [item]));

// DTC navigation links function (dropdown-based)
const getDTCNavigationLinks = (pathname: string): Navbar03NavItem[] =>
  [
    { href: '/', label: 'Home' },
    {
      label: 'Programs',
      items: [
        { href: '/dgn', label: 'DGN Program', description: 'Digital Governance Network' },
        { href: '/certificates', label: 'Certificates', description: 'View issued certificates' },
        { href: '/lifelong', label: 'Lifelong Model', description: 'Our learning journey model' },
      ],
    },
    {
      label: 'About',
      items: [
        { href: '/leadership', label: 'Leadership', description: 'Meet the team' },
        { href: '/reports', label: 'Media', description: 'News, reports, and updates' },
      ],
    },
    { href: '/contact', label: 'Contact' },
  ].map((item) => markActive(pathname, item));

export const Navbar03 = React.forwardRef<HTMLElement, Navbar03Props>(
  (
    {
      className,
      logo = <DTCLogo />,
      logoHref = '/',
      navigationLinks,
      signInText = 'Theme',
      signInHref = '#',
      ctaText = 'Join Discord',
      ctaHref = DISCORD_INVITE_LINK,
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Get DTC navigation links based on current pathname
    const dtcNavLinks = (navigationLinks || getDTCNavigationLinks(pathname)).map((item) =>
      markActive(pathname, item)
    );
    const mobileNavLinks = flattenNavLinks(dtcNavLinks).map((item) => markActive(pathname, item) as Navbar03NavLinkItem);

    useEffect(() => {
      setMounted(true);
    }, []);

    // Enhanced mobile menu toggle with animation control
    const toggleMobileMenu = () => {
      if (!isAnimating) {
        setIsAnimating(true);
        setMobileMenuOpen(!mobileMenuOpen);
        
        // Reset animation state after transition
        setTimeout(() => {
          setIsAnimating(false);
        }, 400);
      }
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [mobileMenuOpen]);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <>
        <header
          ref={combinedRef}
          className={cn(
            'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-full shadow-lg [&_*]:no-underline',
            className
          )}
          {...props}
        >
          <div className="flex h-14 items-center gap-2 md:gap-3 px-4 md:px-6 w-full max-w-6xl justify-between">
            {/* Logo - Always visible */}
            <Link
              href={logoHref}
              className="flex items-center text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              <div className="text-2xl">
                {logo}
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on small screens */}
            <div className="hidden md:flex">
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-1">
                  {dtcNavLinks.map((item, index) => {
                    const desktopItemBase = cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent px-2 lg:px-3 py-2 rounded-md relative',
                      'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300',
                      'hover:before:scale-x-100 data-[state=open]:before:scale-x-100',
                      isDropdownItem(item) ? '' : 'h-10'
                    );

                    if (!isDropdownItem(item)) {
                      return (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink asChild className={cn(desktopItemBase, item.active && 'before:scale-x-100 text-primary')}>
                            <Link href={item.href} data-active={item.active}>
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    }

                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className={cn(desktopItemBase, item.active && 'text-primary')}>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-2 p-4 md:w-[380px] bg-popover/95 backdrop-blur border rounded-xl shadow-lg">
                            {item.items.map((link) => (
                              <li key={link.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={link.href}
                                    className={cn(
                                      'block rounded-lg p-3 no-underline outline-none transition-colors',
                                      'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                      link.active && 'bg-accent/60 text-accent-foreground'
                                    )}
                                  >
                                    <div className="text-sm font-medium leading-none">{link.label}</div>
                                    {link.description ? (
                                      <p className="mt-1 text-xs leading-snug text-muted-foreground">
                                        {link.description}
                                      </p>
                                    ) : null}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              {/* Mobile hamburger - Only visible on small screens */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-10 w-10 rounded-full hover:bg-accent/20 transition-all duration-200 group",
                    mobileMenuOpen && "bg-accent/20"
                  )}
                  onClick={toggleMobileMenu}
                  disabled={isAnimating}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  <HamburgerIcon isOpen={mobileMenuOpen} />
                </Button>
              </div>

              {/* Theme toggle - Always visible */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-full px-3 transition-all duration-200"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    if (onSignInClick) onSignInClick();
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}

              {/* Discord button - Always visible */}
              <Button
                asChild
                size="sm"
                className="text-xs md:text-sm bg-un-blue dark:bg-un-blue text-gray-100 dark:text-white font-medium px-3 md:px-4 h-9 rounded-full shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
              >
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => {
                    if (onCtaClick) onCtaClick();
                  }}
                >
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Enhanced Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 z-[100] md:hidden",
            "transition-all duration-400 ease-out",
            mobileMenuOpen 
              ? "opacity-100 visible backdrop-blur-xl" 
              : "opacity-0 invisible"
          )}
          style={{
            background: mobileMenuOpen 
              ? 'linear-gradient(135deg, hsl(var(--background)/.98) 0%, hsl(var(--background)/.95) 100%)'
              : 'transparent'
          }}
        >
          {/* Background pattern overlay */}
          <div className={cn(
            "absolute inset-0 opacity-30 transition-opacity duration-400",
            mobileMenuOpen ? "opacity-30" : "opacity-0"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          <div className={cn(
            "relative flex flex-col h-full transition-all duration-400 ease-out",
            mobileMenuOpen 
              ? "transform translate-y-0" 
              : "transform translate-y-4"
          )}>
            {/* Enhanced Mobile header */}
            <div className={cn(
              "flex items-center justify-between p-6 border-b border-border/10",
              "bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm",
              "transition-all duration-400 delay-100",
              mobileMenuOpen 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform -translate-y-4"
            )}>
              <Link 
                href={logoHref} 
                className="flex items-center hover:scale-105 transition-transform duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="text-2xl">
                  {logo}
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-accent/20 transition-all duration-200 hover:rotate-90"
                onClick={toggleMobileMenu}
                disabled={isAnimating}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            
            {/* Enhanced Mobile navigation with better animations and icons */}
            <div className="flex-1 flex items-center justify-center px-6 py-8">
              <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                {mobileNavLinks.map((link, index) => {
                  const IconComponent = navIcons[link.label as keyof typeof navIcons];
                  
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        'group relative flex items-center justify-between w-full rounded-2xl px-6 py-5 text-lg font-semibold transition-all duration-300 cursor-pointer no-underline',
                        'bg-background/40 border border-border/20 backdrop-blur-sm',
                        'hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10',
                        'active:scale-[0.98] active:transition-transform active:duration-100',
                        link.active && 'bg-primary/10 border-primary/40 text-primary shadow-md shadow-primary/20',
                        // Staggered animation delays
                        mobileMenuOpen 
                          ? 'opacity-100 transform translate-y-0' 
                          : 'opacity-0 transform translate-y-4'
                      )}
                      style={{
                        transitionDelay: mobileMenuOpen ? `${150 + (index * 100)}ms` : '0ms'
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-4">
                        {IconComponent && (
                          <div className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                            "bg-primary/10 text-primary/70 group-hover:bg-primary/20 group-hover:text-primary group-hover:scale-110",
                            link.active && "bg-primary/20 text-primary scale-105"
                          )}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                        )}
                        <span className="relative z-10 font-medium">{link.label}</span>
                      </div>
                      
                      {/* Animated background gradient */}
                      <div className={cn(
                        'absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-all duration-500',
                        'group-hover:opacity-100 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5'
                      )} />
                      
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 -translate-x-full group-hover:translate-x-full group-hover:opacity-100 transition-all duration-700" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Mobile footer */}
            <div className={cn(
              "flex items-center justify-center gap-4 p-6 border-t border-border/10",
              "bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-sm",
              "transition-all duration-400 delay-300",
              mobileMenuOpen 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-4"
            )}>
              {mounted && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-12 px-6 text-base font-medium hover:bg-accent/20 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    if (onSignInClick) onSignInClick();
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-5 w-5 mr-3" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 mr-3" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>
              )}
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base bg-un-blue hover:bg-un-blue/90 dark:bg-un-blue dark:hover:bg-un-blue/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => {
                    if (onCtaClick) onCtaClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
);

Navbar03.displayName = 'Navbar03';

export { DTCLogo, HamburgerIcon };