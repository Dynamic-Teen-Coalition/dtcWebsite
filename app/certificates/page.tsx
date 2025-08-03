"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  Users,
  Award,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Target,
  Crown,
  Star,
  Rocket,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedLines } from "@/components/animated-background"

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
      pathLength: { duration: 2, ease: [0.42, 0, 0.58, 1] },
      opacity: { duration: 0.5 },
    },
  },
}

export default function CertificatesPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const [activeLevel, setActiveLevel] = useState(0)

  const levels = [
    {
      id: "friend",
      title: "DTC Friend",
      subtitle: "Anyone of any age",
      description: "Join the DTC Friends Discord server, introduce yourself, and get involved.",
      requirements: ["Join Discord server", "Introduce yourself", "Participate in discussions"],
      benefits: ["Access to community", "Learning opportunities", "Global network"],
      icon: <Users className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      textColor: "text-green-700 dark:text-green-300",
      buttonText: "Join Discord",
      duration: "Immediate",
    },
    {
      id: "certificate",
      title: "DTC Friends 25 Certificate",
      subtitle: "Teens Only",
      description: "Earned by teens through contribution and participation. A formal record of your engagement.",
      requirements: [
        "Be 13-19 years old",
        "Active participation for 30+ days",
        "Complete learning modules",
        "Contribute to discussions",
        "Peer collaboration",
      ],
      benefits: [
        "Official DTC credential",
        "Recognition of expertise",
        "Portfolio enhancement",
        "Advanced access",
        "Mentorship opportunities",
      ],
      icon: <Award className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      textColor: "text-blue-700 dark:text-blue-300",
      buttonText: "Start Journey",
      duration: "1-3 months",
    },
    {
      id: "ambassador",
      title: "DTC Ambassador",
      subtitle: "Teens Only",
      description: "Our trained, outward-facing representatives. Microcertified and actively engaged in global work.",
      requirements: [
        "Hold DTC Friends 25 Certificate",
        "Complete ambassador training",
        "Demonstrate leadership skills",
        "Public speaking ability",
        "Global engagement commitment",
      ],
      benefits: [
        "Official representative status",
        "Speaking opportunities",
        "UN meeting participation",
        "Global network access",
        "Leadership development",
      ],
      icon: <Globe className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      textColor: "text-purple-700 dark:text-purple-300",
      buttonText: "Apply Now",
      duration: "3-6 months",
    },
    {
      id: "board",
      title: "DTC Board",
      subtitle: "Teens Only + One Adult Educational Strategist",
      description: "The core of DTC's direction and strategy. Teen-led, globally connected, focused on outcomes.",
      requirements: [
        "Ambassador certification",
        "Proven impact and leadership",
        "Strategic thinking ability",
        "Global perspective",
        "Commitment to DTC mission",
      ],
      benefits: [
        "Strategic decision making",
        "UN system influence",
        "Global policy impact",
        "Leadership recognition",
        "Future career pathways",
      ],
      icon: <Crown className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      textColor: "text-orange-700 dark:text-orange-300",
      buttonText: "Board Application",
      duration: "6+ months",
    },
  ]

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
      <Navbar />
      <ThemeToggle />

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
                <span className="text-blue-600 dark:text-blue-400">Certificates</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Your pathway to global digital governance leadership
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              From community member to global changemaker - discover your journey with DTC
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
                >
                  Start Your Journey
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  >
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Animated Roadmap Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Your DTC Journey Roadmap
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Follow the path from community member to global leader
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
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-8 lg:gap-16`}
                    onMouseEnter={() => setActiveLevel(index)}
                  >
                    {/* Level Card */}
                    <div className="flex-1 max-w-2xl">
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
                            {level.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{level.title}</h3>
                            <p className={`text-lg font-medium ${level.textColor}`}>{level.subtitle}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Timeline: {level.duration}</p>
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
                            className={`w-full bg-gradient-to-r ${level.color} text-white hover:opacity-90 py-3 rounded-full font-medium shadow-lg`}
                          >
                            {level.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Visual Element */}
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        scale: activeLevel === index ? 1.1 : 1,
                        rotate: activeLevel === index ? 5 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl">
                        <motion.div
                          className={`text-6xl lg:text-8xl bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}
                          animate={{
                            scale: activeLevel === index ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {level.icon}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">How to Join</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Simple steps to start your DTC journey today
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Join Discord",
                  description: "Click the Discord invite link and join our global community",
                  icon: <MessageCircle className="h-8 w-8" />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "02",
                  title: "Introduce Yourself",
                  description: "Share your background, interests, and goals with the community",
                  icon: <Users className="h-8 w-8" />,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  step: "03",
                  title: "Start Learning",
                  description: "Engage with content, join discussions, and complete learning modules",
                  icon: <BookOpen className="h-8 w-8" />,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "04",
                  title: "Earn Recognition",
                  description: "Progress through levels and earn certificates as you contribute",
                  icon: <Rocket className="h-8 w-8" />,
                  color: "from-orange-500 to-red-500",
                },
              ].map((step, index) => (
                <motion.div key={step.step} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} className="h-full">
                    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden">
                      <CardContent className="p-6 relative">
                        <motion.div
                          className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}
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
                          className={`text-white mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {step.icon}
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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                Join thousands of teens worldwide who are shaping the future of digital governance. Your voice matters,
                and your time is now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join DTC Friends Discord
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Learn About Requirements
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
              © 2024 Dynamic Teen Coalition. Building the future, systematically, collaboratively, and from the inside
              out.
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  )
}
