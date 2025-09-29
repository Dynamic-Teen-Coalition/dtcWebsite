"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Users,
  Target,
  Shield,
  Layers,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  FileText,
  Crown,
  Star,
  Heart,
  Brain,
  Rocket
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import { AnimatedLines } from "@/components/animated-background"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Footer from "@/components/footer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  stakeholderStages, 
  principles, 
  implementationPhases, 
  lifelongContent,
  LIFELONG_DOCUMENT_URL 
} from "@/data/lifelong"
import { DOC_LINK } from "@/data/doc"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LifelongPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const [activeStage, setActiveStage] = useState(0)
  const stackingContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // GSAP Stacking Animation
  useEffect(() => {
    if (typeof window === "undefined") return

    const cards = cardRefs.current.filter(Boolean)
    if (cards.length === 0) return

    // Clear previous animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // Check if mobile
    const isMobile = window.innerWidth < 768

    // Set initial positions and styles
    cards.forEach((card, index) => {
      if (!card) return
      
      gsap.set(card, {
        position: "sticky",
        top: isMobile ? "80px" : "100px", // Smaller top offset on mobile
        zIndex: cards.length - index,
        scale: 1,
        y: 0,
        opacity: 1,
      })
    })

    // Create stacking animations for each card
    cards.forEach((card, index) => {
      if (!card) return

      const nextIndex = index + 1
      const isLast = nextIndex >= cards.length

      if (!isLast) {
        ScrollTrigger.create({
          trigger: card,
          start: isMobile ? "top 80px" : "top 100px",
          end: isMobile ? "bottom+=60px 80px" : "bottom+=80px 100px", // Shorter range on mobile
          scrub: isMobile ? 0.3 : 0.5, // Faster animation on mobile
          onUpdate: (self) => {
            const progress = self.progress
            
            // Mobile-adjusted transformations
            let scale, yTransform, opacity, blur
            
            if (progress < 0.2) {
              // Card is fully visible
              scale = 1
              yTransform = 0
              opacity = 1
              blur = 0
            } else if (progress < 0.6) {
              // Fast transition zone
              const transitionProgress = (progress - 0.2) / 0.4 // 0 to 1 over 0.2-0.6 range
              scale = 1 - (transitionProgress * (isMobile ? 0.15 : 0.2)) // Less scaling on mobile
              yTransform = transitionProgress * (isMobile ? 60 : 100) // Less movement on mobile
              opacity = 1 - (transitionProgress * 0.7) // Same fade
              blur = transitionProgress * (isMobile ? 2 : 4) // Less blur on mobile
            } else {
              // Card is mostly hidden
              scale = isMobile ? 0.85 : 0.8
              yTransform = isMobile ? 60 : 100
              opacity = 0.3
              blur = isMobile ? 2 : 4
            }
            
            gsap.set(card, {
              scale: scale,
              y: yTransform,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              transformOrigin: "center center"
            })

            // Update active stage earlier for clearer transitions
            if (progress > 0.15) {
              setActiveStage(nextIndex)
            } else {
              setActiveStage(index)
            }
          },
          onEnter: () => setActiveStage(index),
          onLeave: () => setActiveStage(nextIndex),
          onEnterBack: () => setActiveStage(index),
          onLeaveBack: () => setActiveStage(Math.max(0, index - 1)),
        })
      } else {
        // For the last card, create a similar animation but without transitioning to next card
        ScrollTrigger.create({
          trigger: card,
          start: isMobile ? "top 80px" : "top 100px",
          end: isMobile ? "bottom+=60px 80px" : "bottom+=80px 100px", // Same animation range as other cards
          scrub: isMobile ? 0.3 : 0.5,
          onUpdate: (self) => {
            const progress = self.progress
            
            // Same animation logic but stays as active card longer
            let scale, yTransform, opacity, blur
            
            if (progress < 0.4) {
              // Card stays fully visible longer since it's the last one
              scale = 1
              yTransform = 0
              opacity = 1
              blur = 0
            } else if (progress < 0.8) {
              // Slower transition for the final card
              const transitionProgress = (progress - 0.4) / 0.4 // 0 to 1 over 0.4-0.8 range
              scale = 1 - (transitionProgress * (isMobile ? 0.1 : 0.15)) // Less scaling on mobile
              yTransform = transitionProgress * (isMobile ? 40 : 60) // Less movement on mobile
              opacity = 1 - (transitionProgress * 0.4) // Fade to 0.6
              blur = transitionProgress * (isMobile ? 1 : 2) // Lighter blur on mobile
            } else {
              // Final state - less dramatic than other cards
              scale = isMobile ? 0.9 : 0.85
              yTransform = isMobile ? 40 : 60
              opacity = 0.6
              blur = isMobile ? 1 : 2
            }
            
            gsap.set(card, {
              scale: scale,
              y: yTransform,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              transformOrigin: "center center"
            })
          },
          onEnter: () => setActiveStage(index),
          onEnterBack: () => setActiveStage(index),
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Set card ref
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }

  // Get icon component from icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Heart,
      Rocket,
      TrendingUp,
      Layers,
      Crown,
      Users,
      Target,
      Shield,
      Star,
      Brain,
      Lightbulb,
      CheckCircle,
    }
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Users className="h-8 w-8" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-un-blue-50 to-indigo-100 dark:from-gray-900 dark:to-un-blue-950 transition-colors duration-300 relative overflow-hidden">
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
                <span className="text-blue-600 dark:text-blue-400">{lifelongContent.hero.title}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {lifelongContent.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              {lifelongContent.hero.description}
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
                  onClick={() => window.open(LIFELONG_DOCUMENT_URL, '_blank')}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  {lifelongContent.hero.readDocsButton}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white dark:bg-gray-800/80 backdrop-blur-sm"
                  >
                    {lifelongContent.hero.backButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Framework Section */}
        <section id="framework-section" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                {lifelongContent.framework.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {lifelongContent.framework.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {principles.map((principle, index) => (
                <motion.div key={principle.title} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -5 }} className="h-full">
                    <Card className="h-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="text-un-blue dark:text-un-blue mb-4 mx-auto w-12 h-12 bg-un-blue/10 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {getIconComponent(principle.iconName)}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {principle.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stakeholder Stages Section - GSAP Stacking Animation */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 via-slate-100 to-blue-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                Stakeholder Roles & Engagement
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each life stage brings unique perspectives and capabilities to the governance process, 
                creating a rich tapestry of intergenerational collaboration.
              </p>
            </motion.div>

            {/* GSAP Stacking Cards Container */}
            <div 
              ref={stackingContainerRef}
              className="relative"
              style={{ 
                height: `${stakeholderStages.length * 500}px`,
                // Mobile adjustments handled by CSS
              }}
            >
              {stakeholderStages.map((stage, index) => (
                <div
                  key={index}
                  ref={setCardRef(index)}
                  className="w-full"
                  style={{ marginBottom: index < stakeholderStages.length - 1 ? 'clamp(80px, 15vw, 180px)' : '0px' }}
                  onMouseEnter={() => setActiveStage(index)}
                >
                  <div
                    className={`relative ${stage.bgColor} ${stage.borderColor} border-2 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl backdrop-blur-sm group transition-all duration-300 overflow-hidden`}
                    style={{
                      boxShadow: activeStage === index 
                        ? "0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1)" 
                        : "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      willChange: "transform, opacity, filter" // Optimize for animations
                    }}
                  >
                    {/* Decorative background elements */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/8 dark:from-blue-600/5 to-indigo-600/8 dark:to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 md:top-6 md:right-6 text-2xl md:text-4xl font-bold opacity-30 dark:opacity-30 select-none text-gray-600 dark:text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8">
                        {/* Icon and Badge */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                          <div
                            className={`inline-flex items-center gap-2 md:gap-3 ${stage.color} text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-lg hover:shadow-xl mb-3 md:mb-4 transition-all duration-300 hover:scale-105`}
                          >
                            <span className="text-lg">
                              {index === 0 ? '💝' : index === 1 ? '🚀' : index === 2 ? '📈' : index === 3 ? '🏢' : '👑'}
                            </span>
                            <span className="text-xs md:text-sm text-black dark:text-white">{stage.title}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
                            {stage.description}
                          </h3>
                          
                          <div className="relative">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full hidden lg:block"></div>
                            <p className="text-sm md:text-base lg:text-lg text-gray-800 dark:text-gray-300 leading-relaxed lg:pl-6">
                              {stage.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-30 dark:opacity-20"></div>
                    
                    {/* Stacking depth indicator */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/8 dark:from-black/5 to-transparent opacity-0 transition-opacity duration-500" 
                           style={{ opacity: activeStage > index ? 0.3 : 0 }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Strategy Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Transition Strategy
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A systematic, phased implementation approach that ensures sustainable adoption and 
                continuous improvement of the inclusive lifelong multistakeholder model.
              </p>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 dark:from-blue-800 dark:via-indigo-700 dark:to-purple-800 rounded-full transform -translate-y-1/2 hidden lg:block"></div>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {implementationPhases.map((phase, index) => (
                  <motion.div key={phase.phase} variants={fadeInUp} className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -8 }} 
                      className="h-full group"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Card className="h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-blue-300 dark:group-hover:border-blue-600">
                        <CardContent className="p-8 relative">                     
                          {/* Icon Container */}
                          <motion.div
                            className={`inline-flex items-center bg-un-blue dark: justify-center w-20 h-20 rounded-2xl ${phase.color} shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="text-white">
                              {getIconComponent(phase.iconName)}
                            </div>
                          </motion.div>
                          
                          {/* Content */}
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {phase.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {phase.description}
                          </p>
                          
                          {/* Progress Indicator */}
                          <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div 
                              className={`h-full ${phase.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(index + 1) * 25}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            ></motion.div>
                          </div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-50 dark:from-blue-900/20 to-transparent rounded-tl-full opacity-50"></div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Analysis Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Impact Analysis
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The model creates lasting change at global, national, and local levels through 
                inclusive participation and intergenerational collaboration.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={slideInLeft}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Global Implications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Establishes an international precedent for age-inclusive governance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Strengthens global cooperation by creating a shared, scalable framework
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Provides a portable standard for other multistakeholder bodies
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Comparative Advantages
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Closes participation gaps caused by age restrictions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Maintains continuity across governance cycles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Creates resilient, adaptable governance structures
                    </p>
                  </div>
                </div>
              </motion.div>
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
                  <FileText className="w-10 h-10 text-un-blue dark:text-white" />
                </div>
              </motion.div>

              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800 dark:text-white leading-tight tracking-tight px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to Learn More About the{" "}
                <span className="bg-gradient-to-r from-un-blue via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  Full Model
                </span>
                ?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-white/90 font-normal mb-16 max-w-4xl mx-auto px-4"
              >
                Dive deeper into DTC's comprehensive framework for inclusive, lifelong multistakeholder governance. 
                Discover the operational details, implementation strategies, and transformative potential of this groundbreaking model.
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
                    onClick={() => window.open(DOC_LINK, '_blank')}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View Full Document
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
