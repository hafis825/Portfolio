import { useEffect, useRef } from "react"

const SNOWFLAKE_COUNT = 45
const SNOWFLAKE_CHARS = ["❄", "❅", "❆"]

function createSnowflake(canvasWidth, canvasHeight, startFromTop = false) {
    const size = Math.random() * 14 + 6 // 6–20px font size (small, medium, large mix)
    return {
        x: Math.random() * canvasWidth,
        y: startFromTop ? -size : Math.random() * canvasHeight,
        size,
        speed: size * 0.15 + 0.25, // larger flakes fall slightly faster
        opacity: Math.random() * 0.5 + 0.3, // 0.3–0.8
        swaySpeed: Math.random() * 0.005 + 0.002,
        swayAmplitude: Math.random() * 40 + 20,
        swayOffset: Math.random() * Math.PI * 2,
        char: SNOWFLAKE_CHARS[Math.floor(Math.random() * SNOWFLAKE_CHARS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01, // slow spin
    }
}

export default function Snowfall() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        let animationId
        let snowflakes = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const init = () => {
            resize()
            snowflakes = Array.from({ length: SNOWFLAKE_COUNT }, () =>
                createSnowflake(canvas.width, canvas.height, false)
            )
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < snowflakes.length; i++) {
                const flake = snowflakes[i]

                // Update position
                flake.y += flake.speed
                flake.x += Math.sin(Date.now() * flake.swaySpeed + flake.swayOffset) * 0.3
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

        window.addEventListener("resize", resize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-40"
            aria-hidden="true"
        />
    )
}
