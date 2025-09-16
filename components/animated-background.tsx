"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Floating shapes configuration
    const shapes: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      rotation: number
      rotationSpeed: number
      type: "circle" | "triangle" | "square" | "hexagon"
      opacity: number
    }> = []

    // Create shapes
    const createShapes = () => {
      const shapeCount = Math.floor((canvas.width * canvas.height) / 50000) // Responsive shape count
      shapes.length = 0

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: ["circle", "triangle", "square", "hexagon"][Math.floor(Math.random() * 4)] as any,
          opacity: Math.random() * 0.1 + 0.02,
        })
      }
    }

    createShapes()

    // Draw functions for different shapes
    const drawCircle = (x: number, y: number, size: number) => {
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(-size * 0.866, size * 0.5)
      ctx.lineTo(size * 0.866, size * 0.5)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const drawSquare = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.fillRect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = Math.cos(angle) * size
        const py = Math.sin(angle) * size
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check if dark mode is active
      const isDarkMode = document.documentElement.classList.contains("dark")

      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed

        // Wrap around screen edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size

        // Set color based on theme
        const baseColor = isDarkMode ? "rgba(96, 165, 250, " : "rgba(59, 130, 246, " // blue-400 for dark, blue-500 for light
        ctx.fillStyle = baseColor + shape.opacity + ")"

        // Draw shape
        switch (shape.type) {
          case "circle":
            drawCircle(shape.x, shape.y, shape.size)
            break
          case "triangle":
            drawTriangle(shape.x, shape.y, shape.size, shape.rotation)
            break
          case "square":
            drawSquare(shape.x, shape.y, shape.size, shape.rotation)
            break
          case "hexagon":
            drawHexagon(shape.x, shape.y, shape.size, shape.rotation)
            break
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}

export function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<
    Array<{
      x: number
      y: number
      originX: number
      originY: number
      active: number
      closest: Array<any>
      circle: {
        radius: number
        active: number
        draw: (ctx: CanvasRenderingContext2D) => void
      }
      vx: number
      vy: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animateHeader = true

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initPoints()
    }

    // Initialize points
    const initPoints = () => {
      const points: typeof pointsRef.current = []

      // Create grid of points with some randomness
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + (Math.random() * width) / 20
          const py = y + (Math.random() * height) / 20

          points.push({
            x: px,
            originX: px,
            y: py,
            originY: py,
            active: 0,
            closest: [],
            circle: {
              radius: 2 + Math.random() * 2,
              active: 0,
              draw: function (ctx: CanvasRenderingContext2D) {
                if (!this.active) return
                ctx.beginPath()
                ctx.arc(
                  points.find((p) => p.circle === this)?.x || 0,
                  points.find((p) => p.circle === this)?.y || 0,
                  this.radius,
                  0,
                  2 * Math.PI,
                  false,
                )
                ctx.fillStyle = `rgba(96, 165, 250, ${this.active})`
                ctx.fill()
              },
            },
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          })
        }
      }

      // Find 5 closest points for each point
      points.forEach((p1, i) => {
        const closest: typeof points = []

        points.forEach((p2, j) => {
          if (i !== j) {
            let placed = false

            // Try to place in first 5 slots
            for (let k = 0; k < 5; k++) {
              if (!placed && !closest[k]) {
                closest[k] = p2
                placed = true
              }
            }

            // Replace if closer
            for (let k = 0; k < 5; k++) {
              if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2
                placed = true
              }
            }
          }
        })

        p1.closest = closest
      })

      pointsRef.current = points
    }

    // Get distance between two points
    const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    }

    // Draw lines between points
    const drawLines = (p: (typeof pointsRef.current)[0]) => {
      if (!p.active) return

      p.closest.forEach((closestPoint) => {
        if (closestPoint) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(closestPoint.x, closestPoint.y)
          ctx.strokeStyle = `rgba(96, 165, 250, ${p.active})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    }

    // Animate points
    const shiftPoint = (p: (typeof pointsRef.current)[0]) => {
      const targetX = p.originX + (Math.random() - 0.5) * 100
      const targetY = p.originY + (Math.random() - 0.5) * 100

      // Simple easing towards target
      const easeSpeed = 0.02
      p.vx += (targetX - p.x) * easeSpeed * 0.1
      p.vy += (targetY - p.y) * easeSpeed * 0.1

      // Apply friction
      p.vx *= 0.98
      p.vy *= 0.98

      // Update position
      p.x += p.vx
      p.y += p.vy
    }

    // Main animation loop
    const animate = () => {
      if (!animateHeader) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Check if dark mode is active
      const isDarkMode = document.documentElement.classList.contains("dark")

      if (!isDarkMode) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, width, height)

      pointsRef.current.forEach((point) => {
        // Calculate distance to mouse
        const distance = Math.abs(getDistance(mouseRef.current, point))

        // Set activity based on distance to mouse
        if (distance < 4000) {
          point.active = 0.3
          point.circle.active = 0.6
        } else if (distance < 20000) {
          point.active = 0.1
          point.circle.active = 0.3
        } else if (distance < 40000) {
          point.active = 0.02
          point.circle.active = 0.1
        } else {
          point.active = 0
          point.circle.active = 0
        }

        // Animate point position
        shiftPoint(point)

        // Draw connections and circles
        drawLines(point)
        point.circle.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Scroll handler
    const handleScroll = () => {
      animateHeader = document.body.scrollTop <= height
    }

    // Resize handler
    const handleResize = () => {
      resizeCanvas()
    }

    // Initialize
    resizeCanvas()
    animate()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-0 dark:opacity-100 transition-opacity duration-500"
      style={{ background: "transparent" }}
    />
  )
}
