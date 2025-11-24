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
  Linkedin,
  Twitter,
  Github,
  MapPin,
  Calendar,
  Lightbulb,
  Code,
  TrendingUp,
  Heart,
  Activity,
  FlaskConical,
  Laptop,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import CTA from "@/components/CTA"
import Footer from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import { WavePattern } from "@/components/wave-pattern"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { AnimatedLines } from "@/components/animated-background"
import { 
  boardMembers, 
  boardSections, 
  boardValues 
} from "@/data/leadership"
import { DISCORD_INVITE_LINK } from "@/data/discord"
import LogoAnimation from "@/components/logo-animation"


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

export default function BoardMembersPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const [activeMember, setActiveMember] = useState(0)

  // Refs for smooth scrolling
  const aboutRef = useRef<HTMLElement>(null)
  const boardMembersRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const joinRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement | null>(null)

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
      Target,
      Shield,
      Star,
      Zap,
      Lightbulb,
      Code,
      TrendingUp,
      Heart,
      Activity,
      FlaskConical,
      Laptop,
      GraduationCap,
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
      setActiveMember((prev) => (prev + 1) % boardMembers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [boardMembers.length])

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
              <div className="flex justify-center ">
                <img
                  src="/dtclogo.png"
                  alt="DTC Logo"
                  className="w-84 h-72 object-contain drop-shadow-lg mb-8"
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
                DTC
                <br />
                <span className="text-blue-600 dark:text-blue-400">{boardSections.hero.title}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {boardSections.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              {boardSections.hero.description}
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
                  onClick={() => scrollToSection(aboutRef)}
                >
                  {boardSections.hero.ctaButton}
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
                    {boardSections.hero.backButton}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                {boardSections.about.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                {boardSections.about.subtitle}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
                {boardSections.about.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section ref={boardMembersRef} className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Teen leaders from around the world driving digital governance innovation
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {boardMembers.map((member, index) => (
                <motion.div key={member.id} variants={fadeInUp}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }} 
                    className="h-full"
                    onMouseEnter={() => setActiveMember(index)}
                  >
                    <Card className="h-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6 relative">
                        {/* Header */}
                        <div className="text-center mb-6">
                          <motion.div
                            className={`mb-6 mx-auto w-48 h-56 rounded-2xl ${member.color} p-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            animate={{
                              scale: activeMember === index ? 1.02 : 1,
                            }}
                          >
                            <div className="w-full h-[105%] rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-2 shadow-inner">
                              <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-transparent dark:from-gray-700 dark:to-gray-800">
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={192}
                                  height={224}
                                  className="w-full h-[110%] object-cover scale-90 rounded-lg shadow-sm hover:scale-95 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                          <div className={`inline-block text-white px-4 py-2 rounded-full text-sm font-medium mb-3 shadow-sm ${
                            member.role.includes('Co-Chair') ? 'bg-purple-600 dark:bg-purple-500' :
                            member.role.includes('Ambassador') ? 'bg-green-600 dark:bg-green-500' :
                            'bg-blue-600 dark:bg-blue-500'
                          }`}>
                            {member.role}
                          </div>
                          
                          {/* Location and Age */}
                          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {member.location}
                            </div>
                            {/* <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Age {member.age}
                            </div> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                {boardSections.values.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {boardSections.values.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {boardValues.map((value, index) => (
                <motion.div key={value.title} variants={fadeInUp}>
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} className="h-full">
                    <Card className="h-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                      <CardContent className="p-6">
                                                                          <motion.div
                          className={`text-gray-800 dark:text-white mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {getIconComponent(value.iconName)}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTA ctaRef={ctaRef} />

        <Footer />
      </div>
    </div>
  )
} 