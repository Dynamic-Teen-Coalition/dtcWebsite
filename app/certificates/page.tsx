"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  Zap,
  CheckCircle,
  ArrowRight,
  Target,
  Star,
  Shield,
  Users,
  Award,
  Globe,
  Crown,
  MessageCircle,
  BookOpen,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { AnimatedLines } from "@/components/animated-background"
import { 
  certificateLevels, 
  joinSteps, 
  pageContent 
} from "@/data/certificates"
import { DISCORD_INVITE_LINK } from "@/data/discord"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" as const },
      opacity: { duration: 0.5 },
    },
  },
}

export default function CertificatesPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const [activeLevel, setActiveLevel] = useState(0)

  // Refs for smooth scrolling
  const roadmapRef = useRef<HTMLElement>(null)
  const howToJoinRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const levels = certificateLevels

  // Function to get icon component from icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Users,
      Award,
      Globe,
      Crown,
      MessageCircle,
      BookOpen,
      Rocket,
    }
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Users className="h-8 w-8" />
  }

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % levels.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [levels.length])

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
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
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
                  onClick={() => scrollToSection(roadmapRef)}
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

        {/* Animated Roadmap Section */}
        <section ref={roadmapRef} className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                {pageContent.roadmap.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {pageContent.roadmap.subtitle}
              </p>
            </motion.div>

            {/* Animated Flow Diagram */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
                <svg className="w-full h-full" viewBox="0 0 4 1000" preserveAspectRatio="none">
                  <motion.path
                    d="M2,0 L2,1000"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                      <stop offset="33%" stopColor="rgb(59, 130, 246)" />
                      <stop offset="66%" stopColor="rgb(168, 85, 247)" />
                      <stop offset="100%" stopColor="rgb(249, 115, 22)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Level Cards */}
              <div className="space-y-16 lg:space-y-24">
                {levels.map((level, index) => (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={level.id === 'board' ? 
                      "flex justify-center" : 
                      `flex flex-col ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-8 lg:gap-16`
                    }
                    onMouseEnter={() => setActiveLevel(index)}
                  >
                    {/* Level Card */}
                    <div className={level.id === 'board' ? "w-full max-w-4xl" : "flex-1 max-w-2xl"}>
                      <motion.div
                        className={`${level.bgColor} ${level.borderColor} border-2 rounded-3xl p-8 shadow-2xl`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        animate={{
                          scale: activeLevel === index ? 1.02 : 1,
                          boxShadow:
                            activeLevel === index
                              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                              : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center mb-6">
                          <motion.div
                            className={`${level.textColor} mr-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg`}
                            animate={{ rotate: activeLevel === index ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {getIconComponent(level.iconName)}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{level.title}</h3>
                            <p className={`text-lg font-medium ${level.textColor}`}>{level.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {level.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                              <Target className="h-4 w-4 mr-2" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {level.requirements.map((req, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {req}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                              <Star className="h-4 w-4 mr-2" />
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {level.benefits.map((benefit, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className={`w-full ${level.color} text-white hover:opacity-90 py-3 rounded-full font-medium shadow-lg`}
                            onClick={() => {
                              if (level.discordLink) {
                                window.open(level.discordLink, '_blank')
                              }
                            }}
                          >
                            {level.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Visual Element - Only for non-board certificates */}
                    {level.id !== 'board' && (
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        animate={{
                          scale: activeLevel === index ? 1.05 : 1,
                          rotate: activeLevel === index ? 2 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Ambassador and Friend levels - show certificate images */}
                        <div className="w-64 h-48 lg:w-80 lg:h-60 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
                          <motion.div
                            className="w-full h-full relative"
                            animate={{
                              scale: activeLevel === index ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={level.id === 'ambassador' ? '/ambassador.png' : '/friends.png'}
                              alt={level.title}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 1024px) 256px, 320px"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section ref={howToJoinRef} className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">{pageContent.howToJoin.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {pageContent.howToJoin.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {joinSteps.map((step, index) => (
                <motion.div key={step.step} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} className="h-full">
                    <Card className="h-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden">
                      <CardContent className="p-6 relative">
                        <motion.div
                          className="text-6xl font-bold text-gray-800 dark:text-white mb-4"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        >
                          {step.step}
                        </motion.div>
                        <motion.div
                          className={`text-gray-800 dark:text-white mb-4 mx-auto w-16 h-16 rounded-full  ${step.color} flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {getIconComponent(step.iconName)}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section ref={ctaRef} className="py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{pageContent.cta.title}</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                {pageContent.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
                    onClick={() => window.open(DISCORD_INVITE_LINK, '_blank')}
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    {pageContent.cta.discordButton}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {pageContent.footer.text}
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  )
}
