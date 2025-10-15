"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import { AnimatedLines } from "@/components/animated-background"
import Footer from "@/components/footer"
import { ShortsCarousel } from "@/components/shorts-carousel"
import { DocumentCarousel } from "@/components/document-carousel"
import { shortsSlides, documentSlides, pageContent } from "@/data/reports"
import { FileText, Play, ArrowDown, MessageCircle } from "lucide-react"
import { DISCORD_INVITE_LINK } from "@/data/discord"
import Link from "next/link"
import { useRef } from "react"

export default function ReportsPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Refs for smooth scrolling
  const videosRef = useRef<HTMLElement>(null)
  const reportsRef = useRef<HTMLElement>(null)

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />
      <GridPattern />
      <WavePattern />
      <AnimatedLines />

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section style={{ y }} className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* DTC Logo */}
              <div className="flex justify-center">
                <img
                  src="/dtclogo.png"
                  alt="DTC Logo"
                  className="w-84 h-72 object-contain drop-shadow-lg mb-8"
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
                DTC
                <br />
                <span className="text-blue-600 dark:text-blue-400">{pageContent.hero.title}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {pageContent.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-au to"
            >
              {pageContent.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
                  onClick={() => scrollToSection(videosRef)}
                >
                  {pageContent.hero.ctaButton}
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white dark:bg-gray-800/80 backdrop-blur-sm"
                  >
                    {pageContent.hero.backButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Videos Section - Carousel */}
        <section ref={videosRef} className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                  {pageContent.videos.title}
                </h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                {pageContent.videos.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ShortsCarousel slides={shortsSlides} />
            </motion.div>
          </div>
        </section>

        {/* Reports Section */}
        <section ref={reportsRef} className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                  {pageContent.reports.title}
                </h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                {pageContent.reports.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DocumentCarousel slides={documentSlides} />
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:to-un-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-un-blue/10 dark:bg-white/15 backdrop-blur-sm rounded-3xl border border-un-blue/30 dark:border-white/30 shadow-2xl">
                  <MessageCircle className="w-10 h-10 text-un-blue dark:text-white" />
                </div>
              </motion.div>

              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800 dark:text-white leading-tight tracking-tight px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {pageContent.cta.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-white/90 font-normal mb-16 max-w-4xl mx-auto px-4"
              >
                {pageContent.cta.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto px-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full bg-un-blue hover:bg-un-blue/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                    onClick={() => window.open(DISCORD_INVITE_LINK, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {pageContent.cta.discordButton}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

