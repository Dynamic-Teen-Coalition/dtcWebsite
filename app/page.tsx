"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Zap,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Target,
  Layers,
  Network,
  Shield,
  Brain,
  Rocket,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import { HeroFloatingDots } from "@/components/hero-floating-dots"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatedLines } from "@/components/animated-background"

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
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

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  const worksScrollRef = useRef<HTMLDivElement>(null)
  const teamScrollRef = useRef<HTMLDivElement>(null)
  const [activeWave, setActiveWave] = useState(0)

  const waves = [
    {
      title: "Wave One: Disruption",
      period: "2022–2023",
      description:
        "At IGF 2022 in Ethiopia, 14-year-old Pyrate Ruby Passell asked why there were no teens in the UN 'Youth' track. That single question disrupted a global system built on the outdated belief that 'youth' begins at 18.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Wave Two: Infrastructure & Beta",
      period: "2024",
      description:
        "DTC established its first official Board and launched the DTC Friends 24 Beta Discord server, the UN's first global Discord platform enabling teens to engage asynchronously in internet governance.",
      icon: <Layers className="h-8 w-8" />,
      color: "from-un-blue to-indigo-500",
    },
    {
      title: "Wave Three: Public, Permanent, and Powerful",
      period: "2025",
      description:
        "The DTC Friends 25 Discord Server is now open and thriving, powering the Digital Governance Network (DGN), a global alliance of teen- and youth-led Discord communities.",
      icon: <Rocket className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const works = [
    {
      title: "Internet Governance Forum 2023",
      description: "Launched DTC with AI-powered presentations in Kyoto, Japan",
      category: "UN Conference",
      image: "/placeholder.svg?height=200&width=300&text=IGF+2023",
      year: "2023",
    },
    {
      title: "Global Digital Compact",
      description: "Contributing to high-level consultations on digital governance",
      category: "Policy Work",
      image: "/placeholder.svg?height=200&width=300&text=GDC",
      year: "2024",
    },
    {
      title: "UN Citiverse Challenge",
      description: "Mentoring university students on frontier technologies and governance",
      category: "Mentorship",
      image: "/placeholder.svg?height=200&width=300&text=Citiverse",
      year: "2024",
    },
    {
      title: "Digital Governance Network",
      description: "Building global infrastructure linking teen-led communities",
      category: "Infrastructure",
      image: "/placeholder.svg?height=200&width=300&text=DGN",
      year: "2025",
    },
    {
      title: "DTC Friends Discord Platform",
      description: "The UN's first global Discord platform for teen engagement",
      category: "Platform",
      image: "/placeholder.svg?height=200&width=300&text=Discord",
      year: "2024-2025",
    },
    {
      title: "Teen Ban Mapping Project",
      description: "Documenting age-based discrimination across platforms and laws",
      category: "Research",
      image: "/placeholder.svg?height=200&width=300&text=Teen+Bans",
      year: "2025",
    },
  ]

  const duplicatedWorks = [...works, ...works, ...works]

  useEffect(() => {
    const scrollContainer = worksScrollRef.current
    if (!scrollContainer) return

    const cardWidth = 320
    const singleSetWidth = works.length * cardWidth

    const scroll = () => {
      if (scrollContainer.scrollLeft >= singleSetWidth) {
        scrollContainer.scrollLeft -= singleSetWidth
      }
      scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" })
    }

    const interval = setInterval(scroll, 3000)
    return () => clearInterval(interval)
  }, [works.length])

  const scrollTeam = (direction: "left" | "right") => {
    if (teamScrollRef.current) {
      const scrollAmount = 300
      teamScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const boardMembers = [
    {
      name: "Pyrate Ruby Passell",
      role: "Co-Chair & Founder",
      specialties: [
        "Policy Writing",
        "UN System Reform",
        "Digital Governance",
        "Anti-Ageism Advocacy",
        "Discord Infrastructure",
        "Certificate Design",
        "Global Strategy",
        "Systems Change",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Pyrate+Ruby",
      available: true,
      bio: "14-year-old founder who disrupted the UN system by questioning teen exclusion. UN Foundation Engine Room Changemaker and Citiverse Challenge Mentor.",
    },
    {
      name: "Amrith Kumar",
      role: "Co-Chair, IGF Lead",
      specialties: ["IGF Strategy", "Policy Development", "Global Coordination", "Teen Advocacy"],
      image: "/placeholder.svg?height=300&width=300&text=Amrith+Kumar",
      available: true,
      bio: "Leading all IGF-related work and teen representation in global internet governance forums.",
    },
    {
      name: "Yuma Soerianto",
      role: "Board Member & Tech Lead",
      specialties: ["Technology Development", "AI Systems", "Platform Architecture", "Innovation Strategy"],
      image: "/placeholder.svg?height=300&width=300&text=Yuma+Soerianto",
      available: true,
      bio: "Teen technologist who joined the first official DTC Board, bringing technical expertise to global governance.",
    },
    {
      name: "Boris Lo",
      role: "Educational Strategist (Adult)",
      specialties: ["Educational Strategy", "Platform Development", "Community Building", "Mentorship"],
      image: "/placeholder.svg?height=300&width=300&text=Boris+Lo",
      available: true,
      bio: "Adult educational strategist supporting DTC's infrastructure and community development initiatives.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-un-blue-50 to-indigo-100 dark:from-gray-900 dark:to-un-blue-950 transition-colors duration-300 relative overflow-hidden">
      <Navbar />
      <AnimatedBackground />
      <GridPattern />
      <WavePattern />
      <AnimatedLines />
      <ThemeToggle />

      <div className="relative z-10">
        <motion.section
          id="hero"
          style={{ y, opacity }}
          className="relative min-h-screen flex items-center justify-center px-4 py-20"
        >
          <HeroFloatingDots />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight pirate-black-gradient px-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Dynamic Teen
                <br />
                <span className="pirate-black-gradient">Coalition</span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed px-4"
            >
              The first and only teen board at the United Nations
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-medium px-4"
            >
              A Movement, Not Just an Organization
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-un-blue hover:bg-un-blue-light dark:bg-un-blue-dark dark:hover:bg-un-blue text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg w-full sm:w-auto"
                >
                  Join DTC Friends
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/certificates">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-un-blue dark:border-un-blue-dark text-un-blue dark:text-un-blue-dark hover:bg-un-blue hover:text-white dark:hover:bg-un-blue-dark dark:hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <motion.div variants={slideInLeft}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  Fighting for Real Teen Inclusion
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  The Dynamic Teen Coalition (DTC) is the first and only teen board at the United Nations, founded to
                  fight for real teen inclusion in global digital governance. We are a movement of teens demanding
                  access, shaping policy, and creating infrastructure that didn't exist before us.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  DTC is merit-based, participation-driven, and impact-oriented. We create and contribute across the
                  entire UN ecosystem, from policy networks to global consultations, offering direct teen access to
                  decision-making spaces never explicitly designed for us.
                </p>

                <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8" variants={staggerContainer}>
                  {[
                    { label: "Merit-Based", icon: <Award className="h-6 w-6" /> },
                    { label: "Participation-Driven", icon: <Users className="h-6 w-6" /> },
                    { label: "Impact-Oriented", icon: <Target className="h-6 w-6" /> },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl"
                    >
                      <div className="text-un-blue dark:text-un-blue-dark mb-2 flex justify-center">{item.icon}</div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={slideInRight} className="relative">
                <motion.div
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                      <Globe className="h-12 w-12 text-un-blue dark:text-un-blue-dark mx-auto mb-3" />
                      <div className="text-2xl font-bold text-un-blue dark:text-un-blue-dark mb-2">First & Only</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Teen UN Board</div>
                    </motion.div>
                    <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                      <Network className="h-12 w-12 text-un-blue dark:text-un-blue-dark mx-auto mb-3" />
                      <div className="text-2xl font-bold text-un-blue dark:text-un-blue-dark mb-2">Global</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Movement</div>
                    </motion.div>
                    <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                      <Shield className="h-12 w-12 text-un-blue dark:text-un-blue-dark mx-auto mb-3" />
                      <div className="text-2xl font-bold text-un-blue dark:text-un-blue-dark mb-2">Policy</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Influence</div>
                    </motion.div>
                    <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                      <Brain className="h-12 w-12 text-un-blue dark:text-un-blue-dark mx-auto mb-3" />
                      <div className="text-2xl font-bold text-un-blue dark:text-un-blue-dark mb-2">Innovation</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">Leadership</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Three Waves Section */}
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
                The Three Waves of the DTC Movement
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From disruption to infrastructure to global impact
              </p>
            </motion.div>

            <div className="space-y-8">
              {waves.map((wave, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                  onMouseEnter={() => setActiveWave(index)}
                >
                  <div className="flex-1">
                    <motion.div
                      className={`bg-gradient-to-r ${wave.color} text-white rounded-3xl p-8 shadow-2xl`}
                      whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                      animate={{
                        scale: activeWave === index ? 1.02 : 1,
                        boxShadow:
                          activeWave === index
                            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="mr-4"
                          animate={{ rotate: activeWave === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {wave.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{wave.title}</h3>
                          <p className="text-lg opacity-90">{wave.period}</p>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed opacity-95">{wave.description}</p>
                    </motion.div>
                  </div>

                  <motion.div className="flex-1 flex justify-center" whileHover={{ scale: 1.05 }}>
                    <div className="w-64 h-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <motion.div
                        animate={{
                          scale: activeWave === index ? 1.2 : 1,
                          rotate: activeWave === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`text-6xl bg-gradient-to-r ${wave.color} bg-clip-text text-transparent`}
                      >
                        {wave.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How DTC Works Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">How DTC Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Multiple pathways for engagement and impact
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "DTC Friend",
                  description:
                    "Anyone of any age. Join the DTC Friends Discord server, introduce yourself, and get involved.",
                  icon: "👋",
                  requirement: "Open to All",
                },
                {
                  title: "DTC Friends 25 Certificate",
                  description:
                    "Earned by teens through contribution and participation. A formal record of your engagement.",
                  icon: "🏆",
                  requirement: "Teens Only",
                },
                {
                  title: "DTC Ambassador",
                  description:
                    "Our trained, outward-facing representatives. Microcertified and actively engaged in global work.",
                  icon: "🌍",
                  requirement: "Teens Only",
                },
                {
                  title: "DTC Board",
                  description:
                    "The core of DTC's direction and strategy. Teen-led, globally connected, focused on outcomes.",
                  icon: "⚡",
                  requirement: "Teens + 1 Adult",
                },
              ].map((level, index) => (
                <motion.div key={level.title} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} whileTap={{ scale: 0.95 }} className="h-full">
                    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden">
                      <CardContent className="p-6 relative">
                        <motion.div
                          className="text-4xl mb-4"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        >
                          {level.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{level.title}</h3>
                        <div className="text-sm font-medium text-un-blue dark:text-un-blue-dark mb-4 px-3 py-1 bg-un-blue-100 dark:bg-un-blue-900 rounded-full inline-block">
                          {level.requirement}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{level.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Works Section - Auto Scrolling */}
        <section id="works" className="py-12 sm:py-20 px-4 sm:px-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Building infrastructure, shaping policy, and creating real change
              </p>
            </motion.div>

            <div className="relative">
              <div
                ref={worksScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {duplicatedWorks.map((work, index) => (
                  <motion.div
                    key={`${work.title}-${index}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % works.length) * 0.1 }}
                    className="flex-shrink-0 w-80"
                  >
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="h-full bg-white/80 dark:bg-gray-100/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                              src={work.image || "/placeholder.svg"}
                              alt={work.title}
                              fill
                              className="object-cover"
                            />
                            <motion.div
                              className="absolute top-4 left-4 bg-un-blue dark:bg-un-blue-dark text-white px-3 py-1 rounded-full text-sm font-medium"
                              whileHover={{ scale: 1.1 }}
                            >
                              {work.year}
                            </motion.div>
                            <motion.div
                              className="absolute top-4 right-4 bg-gray-800/90 dark:bg-un-blue-900/90 text-white px-3 py-1 rounded-full text-sm font-medium"
                              whileHover={{ scale: 1.1 }}
                            >
                              {work.category}
                            </motion.div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-800 mb-3">{work.title}</h3>
                            <p className="text-gray-600 dark:text-gray-700 leading-relaxed">{work.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section id="team" className="py-12 sm:py-20 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">DTC Board</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Teen-led leadership driving global change
              </p>
            </motion.div>

            <div className="relative">
              <button
                onClick={() => scrollTeam("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>

              <button
                onClick={() => scrollTeam("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>

              <div
                ref={teamScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80"
                  >
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-gray-900/50">
                        <CardContent className="p-6">
                          <div className="text-center mb-6">
                            <motion.div
                              className="relative w-24 h-24 mx-auto mb-4"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                fill
                                className="object-cover rounded-full"
                              />
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                            <p className="text-un-blue dark:text-un-blue-dark font-medium mb-4">{member.role}</p>
                            {member.available && (
                              <motion.span
                                className="inline-block bg-green-100 dark:bg-green-800/80 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                              >
                                Available for Engagements
                              </motion.span>
                            )}
                          </div>

                          <div className="mb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Specialties:</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.specialties.slice(0, 4).map((specialty, idx) => (
                                <motion.span
                                  key={specialty}
                                  className="bg-un-blue-100 dark:bg-un-blue-800/80 text-un-blue-800 dark:text-un-blue-200 px-2 py-1 rounded text-xs font-medium"
                                  whileHover={{ scale: 1.05 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  {specialty}
                                </motion.span>
                              ))}
                              {member.specialties.length > 4 && (
                                <span className="bg-gray-100 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                                  +{member.specialties.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">What We Do</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Creating real impact across the UN system and beyond
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "UN Policy Participation",
                  description: "Participate in high-level UN meetings and contribute to policy development",
                  icon: "🏛️",
                },
                {
                  title: "Ageism Tracking",
                  description: "Track ageism and access gaps in over 200 UN and IGF institutions",
                  icon: "📊",
                },
                {
                  title: "Teen Ban Documentation",
                  description: "Document national teen bans and digital participation restrictions",
                  icon: "📋",
                },
                {
                  title: "Global Governance Pathways",
                  description: "Provide teens with a real, sustainable path into global governance at the UN",
                  icon: "🛤️",
                },
                {
                  title: "Essential Tools Development",
                  description:
                    "Build essential tools for teen engagement: bots, certificates, knowledge systems, and networks",
                  icon: "🔧",
                },
                {
                  title: "Digital Governance Network",
                  description: "Operate the DGN to unify global teen efforts in digital governance and SDGs",
                  icon: "🌐",
                },
              ].map((activity, index) => (
                <motion.div key={activity.title} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} whileTap={{ scale: 0.95 }} className="h-full">
                    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                      <CardContent className="p-6">
                        <motion.div
                          className="text-4xl mb-4"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                          }}
                        >
                          {activity.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{activity.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 pirate-black-gradient">Join the Movement</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300">
                We are building the future, systematically, collaboratively, and from the inside out. Whether you're a
                teen ready to make a difference or an organization looking to partner with youth leaders, there's a
                place for you in the DTC movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-un-blue text-white hover:bg-un-blue-light px-8 py-4 text-lg rounded-full shadow-lg"
                  >
                    Join DTC Friends Discord
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/certificates">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-un-blue text-un-blue hover:bg-un-blue hover:text-white dark:border-un-blue-dark dark:text-un-blue-dark dark:hover:bg-un-blue-dark dark:hover:text-white px-8 py-4 text-lg rounded-full bg-transparent"
                    >
                      Learn About Certificates
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mailing List Section */}
        <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Stay Connected</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Subscribe to our official mailing list for updates on DTC initiatives, UN activities, and opportunities
                to get involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto"
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <motion.input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full whitespace-nowrap shadow-lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Subscribe
                  </Button>
                </motion.div>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Official DTC mailing list:{" "}
                <a
                  href="https://mail.intgovforum.org/mailman/listinfo/dtc_intgovforum.org"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  mail.intgovforum.org/mailman/listinfo/dtc_intgovforum.org
                </a>
              </p>
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
