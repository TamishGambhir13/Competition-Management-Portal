"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resize)
    resize()

    // Create gradient points
    const points = [
      { x: width * 0.1, y: height * 0.2, radius: Math.max(width, height) * 0.3, color: "rgba(59, 130, 246, 0.15)" },
      { x: width * 0.8, y: height * 0.5, radius: Math.max(width, height) * 0.4, color: "rgba(16, 185, 129, 0.1)" },
      { x: width * 0.5, y: height * 0.8, radius: Math.max(width, height) * 0.35, color: "rgba(139, 92, 246, 0.12)" },
    ]

    // Animation loop
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update points position with subtle movement
      points[0].x = width * 0.1 + Math.sin(time * 0.5) * width * 0.05
      points[0].y = height * 0.2 + Math.cos(time * 0.3) * height * 0.05

      points[1].x = width * 0.8 + Math.sin(time * 0.4) * width * 0.05
      points[1].y = height * 0.5 + Math.cos(time * 0.6) * height * 0.05

      points[2].x = width * 0.5 + Math.sin(time * 0.7) * width * 0.05
      points[2].y = height * 0.8 + Math.cos(time * 0.5) * height * 0.05

      // Draw gradient blobs
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, point.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

