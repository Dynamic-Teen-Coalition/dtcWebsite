"use client"

import { useEffect, useRef } from "react"

export function HeroFloatingDots() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createDot = () => {
      const dot = document.createElement('div')
      dot.className = 'floating-dot'
      
      // Random horizontal starting position
      const startX = Math.random() * 100
      dot.style.left = startX + '%'
      
      // Random horizontal drift
      const randomX = (Math.random() - 0.5) * 100 + 'px'
      dot.style.setProperty('--random-x', randomX)
      
      // Random delay
      dot.style.animationDelay = Math.random() * 2 + 's'
      
      // Random size (small variations)
      const size = Math.random() * 3 + 2
      dot.style.width = size + 'px'
      dot.style.height = size + 'px'
      
      // Random blue shade and intensity
      const blueShades = [
        '#3b82f6',
        '#2563eb', 
        '#1d4ed8',
        '#60a5fa'
      ]
      const color = blueShades[Math.floor(Math.random() * blueShades.length)]
      dot.style.background = color
      dot.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`
      
      container.appendChild(dot)
      
      // Remove dot after animation completes
      setTimeout(() => {
        if (container.contains(dot)) {
          container.removeChild(dot)
        }
      }, 6000)
    }

    // Create initial dots
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createDot(), i * 300)
    }

    // Continue creating dots
    const interval = setInterval(createDot, 500)

    return () => {
      clearInterval(interval)
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return <div ref={containerRef} className="hero-floating-dots" />
}
