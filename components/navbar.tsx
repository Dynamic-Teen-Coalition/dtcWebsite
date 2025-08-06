"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FileText,
  Users,
  Globe,
  ExternalLink,
  Linkedin,
  Instagram,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      name: "Certificates",
      href: "/certificates",
      icon: FileText,
      isActive: pathname === "/certificates",
    },
    {
      name: "Leadership",
      href: "/leadership",
      icon: Users,
      isActive: pathname === "/leadership",
    },
  ]

  const socialItems = [
    {
      name: "UN Website",
      href: "https://www.intgovforum.org/en/content/dynamic-teen-coalition",
      icon: Globe,
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/dtcigf",
      icon: ExternalLink,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dynamicteencoalition/?hl=en",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/dynamic-teen-coalition",
      icon: Linkedin,
    },
  ]

  if (!mounted) return null

     return (
      <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed z-50 bottom-6"
      style={{
        left: "38%",
        transform: "translateX(-50%)",
        width: "max-content",
        backgroundColor: "rgba(17, 24, 39, 0.9)", 
        backdropFilter: "blur(12px)",       
        border: "1px solid rgba(75, 85, 99, 0.5)", 
        borderRadius: "9999px",                   
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
    
    
                <div className="flex items-center space-x-2 px-4 py-3">
          {/* Navigation Items */}
                     {navItems.map((item) => (
             <motion.div 
               key={item.name} 
               whileHover={{ scale: 1.05 }} 
               whileTap={{ scale: 0.95 }}
               className="relative"
               onMouseEnter={() => setHoveredItem(item.name)}
               onMouseLeave={() => setHoveredItem(null)}
             >
               <Link href={item.href}>
                 <Button
                   variant="ghost"
                   size="sm"
                   className={`h-10 w-10 p-0 rounded-full ${
                     item.isActive
                       ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                       : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                   }`}
                 >
                   <item.icon className="h-5 w-5" />
                 </Button>
               </Link>
               {/* Tooltip */}
               {hoveredItem === item.name && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50"
                 >
                   {item.name}
                 </motion.div>
               )}
             </motion.div>
           ))}

          {/* Divider */}
          <div className="w-px h-6 bg-gray-700 mx-2" />

          {/* Social Media Icons */}
                     {socialItems.map((item) => (
             <motion.div 
               key={item.name} 
               whileHover={{ scale: 1.05 }} 
               whileTap={{ scale: 0.95 }}
               className="relative"
               onMouseEnter={() => setHoveredItem(item.name)}
               onMouseLeave={() => setHoveredItem(null)}
             >
               <Button
                 variant="ghost"
                 size="sm"
                 asChild
                 className="h-10 w-10 p-0 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/50"
               >
                 <a
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <item.icon className="h-5 w-5" />
                 </a>
               </Button>
               {/* Tooltip */}
               {hoveredItem === item.name && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50"
                 >
                   {item.name}
                 </motion.div>
               )}
             </motion.div>
           ))}

          {/* Divider */}
          <div className="w-px h-6 bg-gray-700 mx-2" />

                     {/* Theme Toggle */}
           <motion.div 
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.95 }}
             className="relative"
             onMouseEnter={() => setHoveredItem("theme")}
             onMouseLeave={() => setHoveredItem(null)}
           >
             <Button
               variant="ghost"
               size="sm"
               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
               className="h-10 w-10 p-0 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/50"
             >
               {theme === "dark" ? (
                 <Sun className="h-5 w-5" />
               ) : (
                 <Moon className="h-5 w-5" />
               )}
             </Button>
             {/* Tooltip */}
             {hoveredItem === "theme" && (
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 10 }}
                 className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50"
               >
                 {theme === "dark" ? "Light Mode" : "Dark Mode"}
               </motion.div>
             )}
           </motion.div>
        </div>
     </motion.nav>
   )
}
