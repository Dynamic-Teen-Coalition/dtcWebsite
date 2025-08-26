"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react"
import { DISCORD_INVITE_LINK } from "@/data/discord"
import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  //data
  const navItems = [
    { name: "Home", href: "/", isActive: pathname === "/" },
    { name: "DGN Program", href: "/dgn", isActive: pathname === "/dgn", hasDropdown: false },
    { name: "Leadership", href: "/leadership", isActive: pathname === "/leadership", hasDropdown: false },
    { name: "Certificates", href: "/certificates", isActive: pathname === "/certificates" },
  ]

  if (!mounted) return null

  const navBg = scrolled 
    ? (theme === 'dark' ? 'bg-gray-900/98' : 'bg-white/98')
    : (theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80')
  
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const hoverColor = theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
  const buttonBg = theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'

  return (
    <>
      {/* Desktop  */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`hidden md:block fixed top-6 left-[30%] -translate-x-1/2 z-50 ${navBg} backdrop-blur-lg border ${borderColor} rounded-full shadow-lg transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}
      >
        <div className="px-8 py-4">
          <div className="flex items-center justify-between min-w-[800px]">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/dtclogo.png" 
                alt="DTC Logo" 
                width={36} 
                height={36} 
                className="rounded-lg"
              />
            </Link>

            {/* Center - Navigation Links */}
            <div className="flex items-center space-x-5">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 ${textSecondary} ${hoverColor} transition-colors px-4 py-2 rounded-full ${
                      item.isActive ? `${textColor} bg-gray-100 dark:bg-gray-800` : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right - Discord and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <Button asChild size="sm" className={`${buttonBg} rounded-full px-6 py-2`}>
                <a href={DISCORD_INVITE_LINK} target="_blank" rel="noreferrer noopener">
                  Join Discord
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`${textSecondary} ${hoverColor} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile  */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`md:hidden fixed top-6 left-6 right-6 z-50 ${navBg} backdrop-blur-lg border ${borderColor} rounded-2xl shadow-lg transition-all duration-300`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/dtclogo.png" 
                alt="DTC Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className={`h-10 w-10 p-0 ${textSecondary} ${hoverColor} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`h-10 w-10 p-0 ${textSecondary} ${hoverColor} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className={`py-6 space-y-4 border-t ${borderColor} mt-4`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block ${textSecondary} ${hoverColor} transition-colors py-2 px-4 rounded-full font-medium ${
                    item.isActive ? `${textColor} bg-gray-100 dark:bg-gray-800` : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`pt-4 space-y-4 border-t ${borderColor}`}>
                <Button asChild size="sm" className={`w-full ${buttonBg} rounded-full py-3`}>
                  <a href={DISCORD_INVITE_LINK} target="_blank" rel="noreferrer noopener">
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.nav>
    </>
  )
}