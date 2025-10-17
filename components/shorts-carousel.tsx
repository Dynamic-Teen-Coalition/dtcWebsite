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
  ctaColor?: string
}

interface ShortsCarouselProps {
  slides: ShortsSlide[]
  playlistLink?: string
}

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
  const playerContainersRef = useRef<(HTMLDivElement | null)[]>([])

  const [activeIndex, setActiveIndex] = useState(0)
  const [players, setPlayers] = useState<any[]>([])
  const [apiReady, setApiReady] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(true)

  // auto edge spacer so first/last cards can center
  const [edgeSpacer, setEdgeSpacer] = useState(0)

  // ----- YT API -----
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true)
      return
    }
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    window.onYouTubeIframeAPIReady = () => setApiReady(true)
  }, [])

  useEffect(() => {
    if (!apiReady || players.length > 0) return
    const newPlayers = slides.map((slide, index) => {
      const container = playerContainersRef.current[index]
      if (!container) return null
      try {
        return new window.YT.Player(container, {
          videoId: slide.videoId,
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            controls: 0,
            modestbranding: 1,
            rel: 1,
            fs: 0,
            disablekb: 1,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              if (index === 0 && userInteracted) {
                try {
                  event.target.mute()
                  event.target.playVideo()
                } catch {}
              }
            },
          },
        })
      } catch (e) {
        console.error("Error creating player:", e)
        return null
      }
    })
    setPlayers(newPlayers)
  }, [apiReady, slides, userInteracted, players.length])

  // ----- Layout helpers -----
  const getStepWidth = useCallback(() => {
    if (!trackRef.current || cardRefs.current.length === 0) return 0
    const style = getComputedStyle(trackRef.current)
    const gap = parseFloat(style.columnGap || style.gap || "24") || 24
    const cardWidth = cardRefs.current[0]?.clientWidth || 0
    return cardWidth + gap
  }, [])

  // account for left spacer when deriving the nearest index
  const getNearestIndex = useCallback(() => {
    if (!trackRef.current) return 0
    const stepWidth = getStepWidth()
    if (stepWidth === 0) return 0
    const raw = (trackRef.current.scrollLeft - edgeSpacer) / stepWidth
    return Math.round(Math.max(0, raw))
  }, [getStepWidth, edgeSpacer])

  // recompute edge spacer on resize/first render
  const updateEdgeSpacer = useCallback(() => {
    const track = trackRef.current
    const firstCard = cardRefs.current[0]
    if (!track || !firstCard) return

    const style = getComputedStyle(track)
    const padLeft = parseFloat(style.paddingLeft || "0") || 0
    const padRight = parseFloat(style.paddingRight || "0") || 0
    const visibleContentWidth = track.clientWidth - padLeft - padRight
    const cardWidth = firstCard.clientWidth

    setEdgeSpacer(Math.max(0, (visibleContentWidth - cardWidth) / 2))
  }, [])

  useEffect(() => {
    updateEdgeSpacer()
    window.addEventListener("resize", updateEdgeSpacer)
    return () => window.removeEventListener("resize", updateEdgeSpacer)
  }, [updateEdgeSpacer, slides.length])

  // ----- Visual transforms while scrolling -----
  const updateTransforms = useCallback(() => {
    if (!trackRef.current || cardRefs.current.length === 0) return
    const stepWidth = getStepWidth()
    if (stepWidth === 0) return

    const scrollLeft = trackRef.current.scrollLeft

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      // offset targets by left spacer so math lines up
      const target = edgeSpacer + i * stepWidth
      const delta = (target - scrollLeft) / stepWidth
      const proximity = Math.max(0, 1 - Math.abs(delta))

      const scale = 1 - (1 - proximity) * SCALE_DELTA
      const shiftX =
        (delta > 0 ? 1 : -1) * (1 - proximity) * (delta < 0 ? SHIFT : SHIFT * 0.65)

      card.style.zIndex = String(100 + Math.round(proximity * 100))
      card.style.transform = `translateX(${shiftX}px) scale(${scale})`
      card.style.filter = `blur(${(1 - proximity) * BLUR_DELTA}px)`

      const shadowAlpha = 0.25 + proximity * 0.35
      card.style.boxShadow = `0 18px 60px rgba(0,0,0,${shadowAlpha})`

      const overlay = card.querySelector(".overlay-glass") as HTMLElement
      if (overlay) overlay.style.opacity = String(0.6 + proximity * 0.4)
    })
  }, [getStepWidth, edgeSpacer])

  const handleScroll = useCallback(() => {
    updateTransforms()
    const newIndex = getNearestIndex()
    if (newIndex !== activeIndex) setActiveIndex(newIndex)
  }, [updateTransforms, getNearestIndex, activeIndex])

  // ----- Video playback sync -----
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
      } catch {}
    })
  }, [activeIndex, players, apiReady, userInteracted])

  // ----- Navigation -----
  const goToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, slides.length - 1))
      const el = cardRefs.current[clamped]
      if (!el) return
      // Browser does the centering (respects padding, gap, etc.)
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      setUserInteracted(true)
    },
    [slides.length]
  )

  const goToPrev = () => goToSlide(activeIndex - 1)
  const goToNext = () => goToSlide(activeIndex + 1)

  // ----- Misc -----
  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true)
      setShowSwipeHint(false)
    }
    document.addEventListener("pointerdown", handleInteraction, { once: true })
    return () => document.removeEventListener("pointerdown", handleInteraction)
  }, [])

  // Hide swipe hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      updateEdgeSpacer()
      goToSlide(getNearestIndex())
      updateTransforms()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getNearestIndex, updateTransforms, goToSlide, updateEdgeSpacer])

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
        className="flex h-full items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-[5%] sm:px-[8%] md:px-[8%] lg:px-[6%]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        tabIndex={0}
        role="region"
        aria-label="Video carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault()
            setUserInteracted(true)
            goToNext()
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault()
            setUserInteracted(true)
            goToPrev()
          }
        }}
      >
        {/* Left spacer so first card can center. Not a snap target. */}
        <div aria-hidden className="shrink-0 snap-none" style={{ width: edgeSpacer }} />

        {slides.map((slide, index) => (
          <section
            key={slide.id}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            className="
              relative shrink-0 snap-center 
              w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%]
              aspect-[9/16] sm:aspect-[16/9]
              rounded-xl sm:rounded-2xl md:rounded-3xl
              overflow-hidden bg-black shadow-2xl
              transition-all duration-[350ms] ease-out
            "
            style={{ transformOrigin: "center", willChange: "transform, filter" }}
          >
            {/* YouTube Player */}
            <div className="absolute inset-0 w-full h-full">
              <div
                ref={(el) => {
                  playerContainersRef.current[index] = el
                }}
                className="absolute inset-0 w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            {/* Bottom Overlay Card */}
            <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 md:left-6 md:right-6 md:bottom-6">
              <div
                className="overlay-glass ring-1 ring-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6 lg:gap-8"
                style={{ background: "rgba(15, 23, 42, 0.55)", backdropFilter: "blur(8px)" }}
              >
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
                    "shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-colors z-3 shadow-lg whitespace-nowrap",
                     "bg-un-blue hover:bg-blue-400 text-white"
                  )}
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Right spacer so last card can center. Not a snap target. */}
        <div aria-hidden className="shrink-0 snap-none" style={{ width: edgeSpacer }} />
      </div>

      {/* Nav buttons - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute inset-y-0 left-0 right-0 pointer-events-none z-[9999]">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={goToPrev}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
            className={cn(
              "pointer-events-auto ml-1 h-12 w-12 rounded-full bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/70 text-white grid place-items-center shadow-xl transition-all duration-200",
              "opacity-0 pointer-events-none",
              "group-hover:opacity-100 group-hover:pointer-events-auto",
              "group-focus-within:opacity-100 group-focus-within:pointer-events-auto",
              activeIndex === 0 && "!opacity-50 !cursor-not-allowed"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            disabled={activeIndex === slides.length - 1}
            aria-label="Next slide"
            className={cn(
              "pointer-events-auto mr-1 h-12 w-12 rounded-full bg-slate-800/60 backdrop-blur-sm hover:bg-slate-700/70 text-white grid place-items-center shadow-xl transition-all duration-200",
              "opacity-0 pointer-events-none",
              "group-hover:opacity-100 group-hover:pointer-events-auto",
              "group-focus-within:opacity-100 group-focus-within:pointer-events-auto",
              activeIndex === slides.length - 1 && "!opacity-50 !cursor-not-allowed"
            )}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Swipe hint for mobile */}
      {showSwipeHint && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="md:hidden fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
  >
    <div className="bg-slate-800/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-lg animate-pulse flex items-center justify-center gap-2 whitespace-nowrap">
      <span>👈</span>
      <span>Swipe to explore</span>
      <span>👉</span>
    </div>
  </motion.div>
)}

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
            className="bg-un-blue hover:bg-un-blue/90 text-white px-6 py-3 text-base sm:px-12 sm:py-6 sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-3 py-3"
          >
            <a
              href={playlistLink || "https://www.youtube.com/playlist?list=PLmc3Zo0InVW9HkasC33_CK13zrnO530uY"}
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
