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
import { AnimatedBackground } from "@/components/animated-background"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatedLines } from "@/components/animated-background"
import { boardMembers } from "@/data/leadership"
import { 
  waves as wavesData, 
  works as worksData, 
  activities as activitiesData, 
  homeContent 
} from "@/data/home"
import { DISCORD_INVITE_LINK } from "@/data/discord"

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

  // Convert waves data to include React components
  const waves = wavesData.map(wave => ({
    ...wave,
    icon: wave.icon === "⚡" ? <Zap className="h-8 w-8" /> : 
          wave.icon === "🏗️" ? <Layers className="h-8 w-8" /> : 
          <Rocket className="h-8 w-8" />
  }))

  const works = worksData

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

  const homePageBoardMembers = boardMembers.slice(0, 4).map(member => ({
    name: member.name,
    role: member.role,
    specialties: member.expertise,
    image: "/placeholder.svg?height=300&width=300&text=" + member.name.replace(/\s+/g, '+'),
      available: true,
    bio: member.description,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />
      <GridPattern />
      <WavePattern />
      <AnimatedLines />

      <div className="relative z-10">
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y, opacity }}
          className="relative min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white mb-8 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Dynamic Teen
                <br />
                <span className="text-blue-600 dark:text-blue-400">Coalition</span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed"
            >
              {homeContent.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-medium"
            >
              {homeContent.hero.description}
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
                  {homeContent.hero.ctaButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/certificates">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  >
                    {homeContent.hero.learnButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={slideInLeft}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                  {homeContent.introduction.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {homeContent.introduction.description1}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {homeContent.introduction.description2}
                </p>

                <motion.div className="grid grid-cols-3 gap-4 mt-8" variants={staggerContainer}>
                  {homeContent.introduction.principles.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center text-2xl">{item.icon}</div>
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
                  <div className="grid grid-cols-2 gap-6">
                    {homeContent.introduction.stats.map((stat, index) => (
                      <motion.div key={stat.label} className="text-center" whileHover={{ scale: 1.1 }}>
                        <div className="text-3xl mb-3">{stat.icon}</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.label}</div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.value}</div>
                    </motion.div>
                    ))}
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
                {homeContent.waves.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {homeContent.waves.subtitle}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">{homeContent.howItWorks.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {homeContent.howItWorks.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {homeContent.howItWorks.levels.map((level, index) => (
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
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full inline-block">
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
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">{homeContent.works.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {homeContent.works.subtitle}
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
                              className="absolute top-4 left-4 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                              whileHover={{ scale: 1.1 }}
                            >
                              {work.year}
                            </motion.div>
                            <motion.div
                              className="absolute top-4 right-4 bg-gray-800/90 dark:bg-blue-900/90 text-white px-3 py-1 rounded-full text-sm font-medium"
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
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">{homeContent.boardMembers.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {homeContent.boardMembers.subtitle}
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
                {homePageBoardMembers.map((member, index) => (
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
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
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
                                  className="bg-blue-100 dark:bg-blue-800/80 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium"
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
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-12"
              >
                <Link href="/leadership">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    >
                      View All Board Members and Ambassadors
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">{homeContent.activities.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {homeContent.activities.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activitiesData.map((activity, index) => (
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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                We are building the future, systematically, collaboratively, and from the inside out. Whether you're a
                teen ready to make a difference or an organization looking to partner with youth leaders, there's a
                place for you in the DTC movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={DISCORD_INVITE_LINK}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
                  >
                    Join DTC Friends Discord
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/certificates">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
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
        <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
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
              © 2025 Dynamic Teen Coalition. Building the future, systematically, collaboratively, and from the inside
              out.
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  )
}
