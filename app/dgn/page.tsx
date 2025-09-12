"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Users,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Zap,
  MessageCircle,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import Footer from "@/components/footer"
import { GridPattern } from "@/components/grid-pattern"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function DGNPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 relative overflow-hidden">
      <AnimatedBackground />
      <GridPattern />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
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
              <span className="text-blue-600 dark:text-blue-400 sm:text-8xl">Digital Governance Network</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Connecting teen-led and youth-supporting organizations through ethical Discord servers focused on civic tech, education, and digital governance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Part of the Dynamic Teen Coalition's global effort to reshape multistakeholder participation in digital governance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEUShrJS6WMk6MZgkUD6tZGlUe4pRVeEN8lNgHinYReiIjdw/viewform" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Join the Network
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-8 py-4 text-lg rounded-full bg-white dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <a href="https://discord.gg/brH8Bs3Y" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join DTC Discord
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is DGN Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              🌐 What is the Digital Governance Network (DGN)?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The DGN connects teen-led and youth-supporting organizations through ethical Discord and Slack servers focused on civic tech, education, and digital governance. It's part of the Dynamic Teen Coalition's global effort to reshape multistakeholder participation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-un-blue/10 dark:bg-un-blue/20 rounded-full mb-6">
                    <Users className="w-8 h-8 text-un-blue dark:text-un-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Teen-Led Organizations</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Supporting authentic teen leadership in technology and governance spaces
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-un-gold/10 dark:bg-un-gold/20 rounded-full mb-6">
                    <Zap className="w-8 h-8 text-un-gold dark:text-un-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Civic Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building technology solutions for democratic participation and governance
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-un-blue/10 dark:bg-un-blue/20 rounded-full mb-6">
                    <Globe className="w-8 h-8 text-un-blue dark:text-un-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Global Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reshaping multistakeholder participation on a global scale
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              📝 How to Join the DGN
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to connect your organization with the Digital Governance Network
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Step 1 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-un-blue text-white rounded-full font-bold text-base sm:text-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">Fill out the application form</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        Complete our comprehensive application form to share information about your organization, its mission, and how it aligns with the UN Sustainable Development Goals.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          size="sm"
                          className="bg-un-blue hover:bg-un-blue/90 dark:bg-un-blue dark:hover:bg-un-blue/90 text-white w-full sm:w-auto text-sm sm:text-base"
                        >
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEUShrJS6WMk6MZgkUD6tZGlUe4pRVeEN8lNgHinYReiIjdw/viewform" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Complete Application
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-un-blue text-white rounded-full font-bold text-base sm:text-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">Join our Discord</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        Connect with the DTC Friends Discord community and introduce your organization in the #introducing-my-org channel to network with other teen-led organizations.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          size="sm"
                          className="bg-un-blue hover:bg-un-blue dark:bg-un-blue dark:hover:bg-un-blue/90 text-white w-full sm:w-auto text-sm sm:text-base pr-4 pl-4"
                        >
                          <a href="https://discord.gg/brH8Bs3Y" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            <span className="hidden sm:inline">Join Discord & Introduce Your Org</span>
                            <span className="sm:hidden">Join Discord & Introduce</span>
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-un-blue text-white rounded-full font-bold text-base sm:text-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">Earn a DTC Certificate</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        Have one of your organization members work toward earning a DTC Friends certificate (for teens) or DTC Allies certificate (for 20+). This grants your Discord or Slack server listing on our AI chatbot at dynamicteencoalition.org.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            asChild
                            size="sm"
                            className="w-full bg-un-blue hover:bg-un-blue/90 dark:bg-un-blue dark:hover:bg-un-blue/90 text-white text-sm sm:text-base"
                          >
                            <Link href="/certificates">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                              <span className="hidden sm:inline">Learn About Certificates</span>
                              <span className="sm:hidden">Certificates</span>
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="w-full border-un-gold dark:border-un-gold text-un-gold dark:text-un-gold hover:bg-un-gold/5 dark:hover:bg-un-gold/10 text-sm sm:text-base"
                          >
                            <a href="https://discord.gg/Cw6rnNNpN3" target="_blank" rel="noopener noreferrer">
                              <span className="hidden sm:inline">View #dtc-friends Channel</span>
                              <span className="sm:hidden">View Channel</span>
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Join the DGN?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Connect with a global network of teen-led organizations driving change in digital governance
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Networking</h3>
                  <p className="text-gray-600 dark:text-gray-300">Connect with teen-led organizations worldwide</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Chatbot Listing</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get featured on our AI-powered discovery platform</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">UN Collaboration</h3>
                  <p className="text-gray-600 dark:text-gray-300">Participate in real UN digital governance initiatives</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skill Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">Access training and certification programs</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Resource Sharing</h3>
                  <p className="text-gray-600 dark:text-gray-300">Share and access educational resources and tools</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-un-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Policy Influence</h3>
                  <p className="text-gray-600 dark:text-gray-300">Contribute to shaping global digital policies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Be part of the global network reshaping digital governance through authentic teen participation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-un-blue hover:bg-un-blue/90 dark:bg-un-blue dark:hover:bg-un-blue/90 text-white px-8 py-4 text-lg"
                >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEUShrJS6WMk6MZgkUD6tZGlUe4pRVeEN8lNgHinYReiIjdw/viewform" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Apply Now
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-un-blue dark:border-un-blue text-un-blue dark:text-un-blue hover:bg-un-blue/5 dark:hover:bg-un-blue/10 px-8 py-4 text-lg"
                >
                  <Link href="/">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Learn More About DTC
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
