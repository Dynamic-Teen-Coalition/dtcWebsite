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
                            className={`mb-4 mx-auto w-20 h-20 rounded-full ${member.color} p-1 flex items-center justify-center`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            animate={{
                              scale: activeMember === index ? 1.1 : 1,
                            }}
                          >
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </motion.div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                          <p className={`text-lg font-medium ${member.textColor} mb-3`}>{member.role}</p>
                          
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

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center">
                          {member.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                            <Star className="h-4 w-4 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {member.achievements.slice(0, 3).map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Expertise */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                            <Target className="h-4 w-4 mr-2" />
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.slice(0, 3).map((skill, idx) => (
                              <motion.span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${member.bgColor} ${member.textColor} border ${member.borderColor}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                          {member.linkedinLink && (
                            <motion.a
                              href={member.linkedinLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                            </motion.a>
                          )}
                          {member.twitterLink && (
                            <motion.a
                              href={member.twitterLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                            >
                              <Twitter className="h-4 w-4" />
                            </motion.a>
                          )}
                          {member.githubLink && (
                            <motion.a
                              href={member.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </motion.a>
                          )}
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

        {/* Call to Action */}
        <section ref={joinRef} className="py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{boardSections.join.title}</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                {boardSections.join.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg"
                    onClick={() => window.open(DISCORD_INVITE_LINK, '_blank')}
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    {boardSections.join.ctaButton}
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
              {boardSections.footer.text}
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  )
} 