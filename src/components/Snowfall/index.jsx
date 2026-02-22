import { useEffect, useRef, useState } from "react"

const SNOWFLAKE_CHARS = ["❄", "❅", "❆"]
const DEBOUNCE_MS = 200

function getSnowflakeCount() {
    return window.innerWidth < 768 ? 20 : 45
}

function createSnowflake(canvasWidth, canvasHeight, startFromTop = false) {
    const size = Math.random() * 14 + 6
    return {
        x: Math.random() * canvasWidth,
        y: startFromTop ? -size : Math.random() * canvasHeight,
        size,
        speed: size * 0.15 + 0.25,
        opacity: Math.random() * 0.5 + 0.3,
        swaySpeed: Math.random() * 0.005 + 0.002,
        swayAmplitude: Math.random() * 40 + 20,
        swayOffset: Math.random() * Math.PI * 2,
        char: SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
    }
}

export default function Snowfall() {
    const canvasRef = useRef(null)
    const [visible, setVisible] = useState(false)

    // Fade-in on mount
    useEffect(() => {
        const timer = requestAnimationFrame(() => setVisible(true))
        return () => cancelAnimationFrame(timer)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        let animationId
        let snowflakes = []
        let debounceTimer = null

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const init = () => {
            resize()
            const count = getSnowflakeCount()
            snowflakes = Array.from({ length: count }, () =>
                createSnowflake(canvas.width, canvas.height, false)
            )
        }

        const handleResize = () => {
            if (debounceTimer) clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => {
                resize()
                // Re-distribute snowflakes for new dimensions
                const count = getSnowflakeCount()
                if (snowflakes.length > count) {
                    snowflakes = snowflakes.slice(0, count)
                } else {
                    while (snowflakes.length < count) {
                        snowflakes.push(createSnowflake(canvas.width, canvas.height, false))
                    }
                }
                // Clamp existing flakes within new bounds
                for (const flake of snowflakes) {
                    if (flake.x > canvas.width) flake.x = Math.random() * canvas.width
                }
            }, DEBOUNCE_MS)
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const now = Date.now()

            for (let i = 0; i < snowflakes.length; i++) {
                const flake = snowflakes[i]

                // Update position
                flake.y += flake.speed
                flake.x += Math.sin(now * flake.swaySpeed + flake.swayOffset) * 0.3
                flake.rotation += flake.rotationSpeed

                // Recycle: when flake goes below screen, reset to top
                if (flake.y > canvas.height + flake.size) {
                    snowflakes[i] = createSnowflake(canvas.width, canvas.height, true)
                }

                // Wrap horizontally
                if (flake.x > canvas.width + flake.size) flake.x = -flake.size
                if (flake.x < -flake.size) flake.x = canvas.width + flake.size

                // Draw snowflake character with rotation
                ctx.save()
                ctx.translate(flake.x, flake.y)
                ctx.rotate(flake.rotation)
                ctx.font = `${flake.size}px sans-serif`
                ctx.textAlign = "center"
                ctx.textBaseline = "middle"
                ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
                ctx.fillText(flake.char, 0, 0)
                ctx.restore()
            }

            animationId = requestAnimationFrame(animate)
        }

        init()
        animate()

        window.addEventListener("resize", handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", handleResize)
            if (debounceTimer) clearTimeout(debounceTimer)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-40"
            style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
            }}
            aria-hidden="true"
        />
    )
}
