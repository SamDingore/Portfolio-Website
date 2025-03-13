"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradientBackground() {
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
            ctx.fillStyle = "#000"
            ctx.fillRect(0, 0, width, height)
        }

        window.addEventListener("resize", resize)
        resize()

        const circles: Circle[] = []
        const colors = ["#4f46e5", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6"]

        for (let i = 0; i < 15; i++) {
            const radius = Math.random() * 100 + 50
            circles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius,
                color: colors[Math.floor(Math.random() * colors.length)],
                dx: (Math.random() - 0.5) * 0.2,
                dy: (Math.random() - 0.5) * 0.2,
                alpha: 0.05 + Math.random() * 0.05,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height)
            ctx.globalCompositeOperation = "source-over"
            ctx.fillStyle = "hsl(var(--background))"
            ctx.fillRect(0, 0, width, height)
            ctx.globalCompositeOperation = "lighter"

            circles.forEach((circle) => {
                ctx.beginPath()
                const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
                gradient.addColorStop(
                    0,
                    `${circle.color}${Math.floor(circle.alpha * 255)
                        .toString(16)
                        .padStart(2, "0")}`,
                )
                gradient.addColorStop(1, `${circle.color}00`)
                ctx.fillStyle = gradient
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
                ctx.fill()

                // Move the circle
                circle.x += circle.dx
                circle.y += circle.dy

                // Bounce off edges
                if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) {
                    circle.dx = -circle.dx
                }
                if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) {
                    circle.dy = -circle.dy
                }
            })

            requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-10" />
}

interface Circle {
    x: number
    y: number
    radius: number
    color: string
    dx: number
    dy: number
    alpha: number
}

