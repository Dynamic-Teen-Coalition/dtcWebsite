"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Copy, Check, Globe, Youtube, Linkedin, FileText, Award, Network, Users } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import Footer from "@/components/footer"
import Image from "next/image"
import { DISCORD_INVITE_LINK } from "@/data/discord"
import { contactContent } from "@/data/contact"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { toast } = useToast()

  const copyEmail = () => {
    navigator.clipboard.writeText(contactContent.email)
    setCopiedEmail(true)
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    })
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  // Map icon names to components
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Globe,
      Youtube,
      Linkedin,
      FileText,
      Award,
      Network,
      Users,
    }
    return icons[iconName]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />
      <GridPattern />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
              <img
                    src="/dtclogo.png"
                    alt="DTC Logo"
                  className="w-84 h-72 object-contain drop-shadow-lg mb-8"
                  />
                  <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-un-blue/20 blur-xl opacity-0 dark:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-gray-600 dark:text-white mb-8 leading-tight">
              <span>G</span>et in{" "}
              <span>T</span>ouch
              </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              {contactContent.hero.subtitle}
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-medium">
              {contactContent.hero.description}
            </p>
            {/* Social Media Icons */}
            <div className="mt-16">
              <div className="flex justify-center items-center gap-6">
                {contactContent.socialMedia.map((social) => {
                  const IconComponent = social.isImage ? null : getIcon(social.icon)
                  
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700 hover:border-un-blue dark:hover:border-un-blue"
                      aria-label={social.name}
                    >
                      {social.isImage ? (
                        <Image
                          src={social.icon}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      ) : IconComponent ? (
                        <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-un-blue dark:hover:text-un-blue transition-colors" />
                      ) : null}
                    </a>
                  )
                })}
          </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Connect with Us
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Side - DTC Logo */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
              >
                <div className="relative overflow-hidden aspect-square sm:aspect-[4/3] rounded-3xl">
                  {/* Subtle gradient background that blends */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50 backdrop-blur-sm"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0">
                    {/* Subtle radial gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-blue-100/20 dark:to-gray-900/20"></div>
                    
                    {/* Very subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>

                  {/* Logo with enhanced shadow */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="relative">
                      {/* Glow effect behind logo */}
                      <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600 scale-110"></div>
                      
                      <img
                        src="/dtclogo.png"
                        alt="DTC Logo"
                        className="relative max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
              </div>
            </motion.div>

              {/* Right Side - Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
                className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
                      <div>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                    {contactContent.contactSection.label}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
                    {contactContent.contactSection.title}
              </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10">
                    {contactContent.contactSection.description}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Discord Row */}
                  <a
                    href={DISCORD_INVITE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-un-blue dark:hover:border-un-blue transition-all group cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 min-w-0 flex-1">
                      <div className="p-2 sm:p-3 md:p-4 bg-white/20 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-all flex-shrink-0">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-un-blue" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl">Join our Discord Server</div>
                        <div className="text-black dark:text-white text-sm sm:text-base md:text-lg hidden sm:block">Connect with the DTC community</div>
                      </div>
                    </div>
                    <div className="text-white opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
          </div>
                  </a>

                  {/* Email Row */}
                  <button
                    onClick={copyEmail}
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-un-blue dark:hover:border-un-blue transition-all group cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 min-w-0 flex-1">
                      <div className="p-2 sm:p-3 md:p-4 bg-un-blue/10 dark:bg-un-blue/20 rounded-lg sm:rounded-xl group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30 transition-all flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-un-blue" />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl truncate">
                          {contactContent.email}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
                          {copiedEmail ? "✓ Copied to clipboard!" : "Click to copy email address"}
                        </div>
                      </div>
                    </div>
                    <div className="text-un-blue flex-shrink-0 ml-2">
                      {copiedEmail ? (
                        <Check className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      ) : (
                        <Copy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </button>
                </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-4 bg-gradient-to-br from-un-blue-50 to-indigo-100 dark:from-gray-900 dark:to-un-blue-950 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Icon */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/10 dark:bg-white/15 backdrop-blur-sm rounded-3xl border border-blue-600/30 dark:border-white/30 shadow-2xl">
                  <FileText className="w-10 h-10 text-blue-600 dark:text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white leading-tight tracking-tight px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {contactContent.ctaSection.title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  {contactContent.ctaSection.highlightedText}
                </span>?
              </motion.h2>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-white/90 font-normal mb-12 sm:mb-16 max-w-4xl mx-auto px-4"
              >
                {contactContent.ctaSection.description}
              </motion.p>
              
              {/* Buttons - Stacked with Gradient Colors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-2xl mx-auto px-4"
              >
                {contactContent.ctaSection.buttons.map((button, index) => {
                  const IconComponent = getIcon(button.icon)
                  
                  return (
                    <motion.div key={button.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href={button.href}
                        className={`w-full inline-flex items-center justify-center gap-2 ${button.color} text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0`}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
                        {button.text}
                      </a>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
      <Toaster />
    </div>
  )
}

