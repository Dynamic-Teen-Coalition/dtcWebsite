"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface DocumentSlide {
  id: string
  title: string
  description: string
  coverImage: string
  driveLink: string
  ctaColor?: string // e.g., "bg-sky-500 hover:bg-sky-400"
}

interface DocumentCarouselProps {
  slides: DocumentSlide[]
}

export function DocumentCarousel({ slides }: DocumentCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Get nearest index based on scroll position
  const getNearestIndex = useCallback(() => {
    if (!trackRef.current) return 0
    return Math.round(trackRef.current.scrollLeft / trackRef.current.clientWidth)
  }, [])

  // Handle scroll events
  const handleScroll = useCallback(() => {
    const newIndex = getNearestIndex()
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }, [getNearestIndex, activeIndex])

  const goToSlide = useCallback((index: number) => {
    if (!trackRef.current) return
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1))
    trackRef.current.scrollTo({
      left: clampedIndex * trackRef.current.clientWidth,
      behavior: 'smooth'
    })
  }, [slides.length])

  const goToPrev = () => goToSlide(activeIndex - 1)
  const goToNext = () => goToSlide(activeIndex + 1)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      goToSlide(getNearestIndex())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getNearestIndex, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, slides.length])

  return (
    <div className="relative w-full max-w-[min(100vw-2rem,700px)] mx-auto h-[min(95vh,990px)] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 dark:bg-slate-950" style={{ aspectRatio: '210/297' }}>
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex h-full overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        tabIndex={0}
        role="region"
        aria-label="Document carousel"
      >
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className="relative shrink-0 w-full h-full snap-center snap-always"
          >
            {/* Full background image */}
            <Image
              src={slide.coverImage}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority={index === 0}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            {/* Translucent box */}
            <div className="absolute bottom-0 left-0 right-0 md:left-8 md:bottom-8 md:right-8 bg-slate-900/50 backdrop-blur-md rounded-t-2xl md:rounded-2xl p-6 md:p-8 ring-1 ring-white/10 flex flex-col">
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-white">
                {slide.title}
              </h2>
              <p className="mt-2 text-slate-300/90 text-sm md:text-base">
                {slide.description}
              </p>
              <div className="mt-4">
                <a
                  href={slide.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                    slide.ctaColor || "bg-sky-500 hover:bg-sky-400 text-slate-900"
                  )}
                >
                  Read in Drive
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="pointer-events-none absolute inset-0">
        <button
          id="prevBtn"
          onClick={goToPrev}
          disabled={activeIndex === 0}
          aria-label="Previous"
          className={cn(
            "pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-all",
            activeIndex === 0 && "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          id="nextBtn"
          onClick={goToNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next"
          className={cn(
            "pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-all",
            activeIndex === slides.length - 1 && "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  )
}

