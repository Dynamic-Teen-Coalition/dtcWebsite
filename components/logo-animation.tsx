"use client"

import { useEffect, useState } from 'react'

interface LogoAnimationProps {
  className?: string
  animatedSrc?: string
  staticSrc?: string
  duration?: number
  alt?: string
}

export default function LogoAnimation({
  className = "w-96 h-56 md:w-[28rem] md:h-64 lg:w-[32rem] lg:h-72 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 dark:brightness-110 dark:contrast-110 object-contain",
  animatedSrc = "/slowerlogo.gif",
  staticSrc = "/dtclogo.png",
  duration = 2000,
  alt = "Dynamic Teen Coalition Logo"
}: LogoAnimationProps) {
  const [showStatic, setShowStatic] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStatic(true)
    }, duration) // Set to match your GIF duration

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <img
      src={showStatic ? staticSrc : animatedSrc}
      alt={alt}
      className={className}
    />
  )
} 