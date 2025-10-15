"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ShortsSlide {
  id: string
  videoId: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  ctaColor?: string // e.g., "bg-sky-500 hover:bg-sky-400"
}

interface ShortsCarouselProps {
  slides: ShortsSlide[]
  playlistLink?: string
}

// Declare YouTube API types
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

// Constants for stacked motion effect
const SHIFT = 60
const SCALE_DELTA = 0.09
const BLUR_DELTA = 2

export function ShortsCarousel({ slides, playlistLink }: ShortsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [players, setPlayers] = useState<any[]>([])
  const [apiReady, setApiReady] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const playerContainersRef = useRef<(HTMLDivElement | null)[]>([])

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true)
      return
    }

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true)
    }
  }, [])

  // Initialize players when API is ready
  useEffect(() => {
    if (!apiReady || players.length > 0) return

    const newPlayers = slides.map((slide, index) => {
      const container = playerContainersRef.current[index]
      if (!container) return null

      try {
        return new window.YT.Player(container, {
          videoId: slide.videoId,
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            controls: 0,          // hide player controls
            modestbranding: 1,    // reduce YT logo
            rel: 0,               // related videos from same channel
            fs: 0,                // remove fullscreen button
            disablekb: 1,         // disable keyboard shortcuts
            iv_load_policy: 3,    // hide in-video annotations
            origin: window.location.origin
          },
          events: {
            onReady: (event: any) => {
              if (index === 0 && userInteracted) {
                try {
                  event.target.mute()
                  event.target.playVideo()
                } catch (e) {
                  console.log('Autoplay prevented')
                }
              }
            }
          }
        })
      } catch (e) {
        console.error('Error creating player:', e)
        return null
      }
    })

    setPlayers(newPlayers)
  }, [apiReady, slides, userInteracted])

  // Calculate step width (card width + gap)
  const getStepWidth = useCallback(() => {
    if (!trackRef.current || cardRefs.current.length === 0) return 0
    const style = getComputedStyle(trackRef.current)
    const gap = parseFloat(style.columnGap || style.gap || '24') || 24
    const cardWidth = cardRefs.current[0]?.clientWidth || 0
    return cardWidth + gap
  }, [])

  // Get nearest index based on scroll position
  const getNearestIndex = useCallback(() => {
    if (!trackRef.current) return 0
    const stepWidth = getStepWidth()
    if (stepWidth === 0) return 0
    return Math.round(trackRef.current.scrollLeft / stepWidth)
  }, [getStepWidth])

  // Update stacked transforms on scroll
  const updateTransforms = useCallback(() => {
    if (!trackRef.current || cardRefs.current.length === 0) return
    
    const stepWidth = getStepWidth()
    if (stepWidth === 0) return
    
    const scrollLeft = trackRef.current.scrollLeft

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      
      const target = i * stepWidth
      const delta = (target - scrollLeft) / stepWidth
      const proximity = Math.max(0, 1 - Math.abs(delta))
      
      const scale = 1 - (1 - proximity) * SCALE_DELTA
      const shiftX = (delta > 0 ? 1 : -1) * (1 - proximity) * (delta < 0 ? SHIFT : SHIFT * 0.65)
      
      card.style.zIndex = String(100 + Math.round(proximity * 100))
      card.style.transform = `translateX(${shiftX}px) scale(${scale})`
      card.style.filter = `blur(${(1 - proximity) * BLUR_DELTA}px)`
      
      const shadowAlpha = 0.25 + proximity * 0.35
      card.style.boxShadow = `0 18px 60px rgba(0,0,0,${shadowAlpha})`
      
      const overlay = card.querySelector('.overlay-glass') as HTMLElement
      if (overlay) {
        overlay.style.opacity = String(0.6 + proximity * 0.4)
      }
    })
  }, [getStepWidth])

  // Handle scroll events
  const handleScroll = useCallback(() => {
    updateTransforms()
    const newIndex = getNearestIndex()
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }, [updateTransforms, getNearestIndex, activeIndex])

  // Sync video playback with active card
  useEffect(() => {
    if (!apiReady || players.length === 0) return

    players.forEach((player, index) => {
      if (!player) return
      try {
        if (index !== activeIndex && player.pauseVideo) {
          player.pauseVideo()
        } else if (index === activeIndex && userInteracted && player.playVideo) {
          player.mute()
          player.playVideo().catch(() => {})
        }
      } catch (e) {}
    })
  }, [activeIndex, players, apiReady, userInteracted])

  const goToSlide = useCallback((index: number) => {
    if (!trackRef.current) return
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1))
    const stepWidth = getStepWidth()
    const totalWidth = trackRef.current.scrollWidth
    const visibleWidth = trackRef.current.clientWidth
    const maxScrollLeft = totalWidth - visibleWidth
    const targetLeft = Math.min(clampedIndex * stepWidth, maxScrollLeft)
    
    trackRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    })
        setUserInteracted(true)
  }, [slides.length, getStepWidth])

  const goToPrev = () => goToSlide(activeIndex - 1)
  const goToNext = () => goToSlide(activeIndex + 1)

  // Handle user interaction
  useEffect(() => {
    const handleInteraction = () => setUserInteracted(true)
    document.addEventListener('pointerdown', handleInteraction, { once: true })
    return () => document.removeEventListener('pointerdown', handleInteraction)
  }, [])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      goToSlide(getNearestIndex())
      updateTransforms()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getNearestIndex, updateTransforms, goToSlide])

  // Initial transform update
  useEffect(() => {
    updateTransforms()
  }, [updateTransforms])

  return (
    <div 
      ref={carouselRef}
      className="group relative w-full max-w-[95vw] md:max-w-[90vw] mx-auto h-[min(75vh,650px)] md:h-[min(86vh,760px)] overflow-visible px-2 md:px-4 lg:px-6 -my-12"
    >
      {/* Track */}
      <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex h-full items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pr-[10%] sm:pr-[12%] md:pr-[8%] lg:pr-[6%]"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        tabIndex={0}
        role="region"
        aria-label="Video carousel"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault()
            setUserInteracted(true)
            goToNext()
          }
          if (e.key === 'ArrowLeft') {
            e.preventDefault()
            setUserInteracted(true)
            goToPrev()
          }
        }}
      >
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            ref={(el) => { cardRefs.current[index] = el }}
            className="relative shrink-0 snap-center w-[95%] sm:w-[92%] md:w-[85%] lg:w-[78%] aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl transition-all duration-[350ms] ease-out"
            style={{
              transformOrigin: 'center',
              willChange: 'transform, filter'
            }}
          >
            {/* YouTube Player */}
            <div className="absolute inset-0 w-full h-full">
              <div
                ref={(el) => { playerContainersRef.current[index] = el }}
                className="absolute inset-0 w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            {/* Bottom Overlay Card */}
            <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 md:left-6 md:right-6 md:bottom-6">
              <div className="overlay-glass ring-1 ring-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6 lg:gap-8"
                   style={{
                     background: 'rgba(15, 23, 42, 0.55)',
                     backdropFilter: 'blur(8px)'
                   }}>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-white truncate">
                    {slide.title}
                  </h2>
                </div>
                <a
                  href={slide.ctaLink || `https://www.youtube.com/watch?v=${slide.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-colors shadow-lg whitespace-nowrap",
                    slide.ctaColor || "bg-blue-500 hover:bg-blue-400 text-white"
                  )}
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    {/* Edge fades */}

      {/* Fade-in Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-[9999]">
        <button
          onClick={goToPrev}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
          className={cn(
            "ml-0.5 sm:ml-1 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/70 text-white grid place-items-center shadow-xl transition-all duration-200",
            "opacity-0 pointer-events-none",
            "md:group-hover:opacity-100 md:group-hover:pointer-events-auto",
            "md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto",
            "opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none",
            activeIndex === 0 && "!opacity-50 !cursor-not-allowed"
          )}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={goToNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next slide"
          className={cn(
            "mr-0.5 sm:mr-1 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/70 text-white grid place-items-center shadow-xl transition-all duration-200",
            "opacity-0 pointer-events-none",
            "md:group-hover:opacity-100 md:group-hover:pointer-events-auto",
            "md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto",
            "opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none",
            activeIndex === slides.length - 1 && "!opacity-50 !cursor-not-allowed"
          )}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center -mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-un-blue hover:bg-un-blue/90 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
                >
                  <a
                    href="https://www.youtube.com/playlist?list=PLmc3Zo0InVW9HkasC33_CK13zrnO530uY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3"
                  >
                    <Play className="h-6 w-6" />
                    View Full YouTube Playlist
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
    </div>
  )
}

