import { useEffect, useState, useRef } from "react"
import "./App.css"
import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"
import SkeletonLoader from "./components/SkeletonLoader"
import Snowfall from "./components/Snowfall"

// Constants
const LOADING_DELAY = 2000
const GLOW_DURATION = 10 * 60 * 1000 // 10 minutes
const SHAKE_THRESHOLD = 30
const SHAKE_COUNT_REQUIRED = 5
const SHAKE_TIME_WINDOW = 500

// Cursor glow styles
const cursorGlowStyle = {
  left: "0px",
  top: "0px",
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  background: "rgba(131, 136, 248, 0.07)",
  boxShadow: "0 0 150px 150px rgba(100, 108, 255, 0.07)",
  filter: "blur(15px)"
}

function App() {
  // Navigation state
  const [sectionIds, setSectionIds] = useState([])
  const [navBarItems, setNavBarItems] = useState([])
  const [currentSection, setCurrentSection] = useState("")

  // UI state
  const [isLoading, setIsLoading] = useState(true)
  const [showCursorGlow, setShowCursorGlow] = useState(false)
  const [showSnow, setShowSnow] = useState(false)

  // Refs
  const cursorRef = useRef(null)
  const glowTimerRef = useRef(null)
  const shakeDataRef = useRef({
    lastX: 0,
    lastY: 0,
    directionChanges: 0,
    lastDirection: { x: 0, y: 0 },
    lastShakeTime: 0
  })

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DELAY)
    return () => clearTimeout(timer)
  }, [])

  // Mouse shake detection & cursor glow position
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor glow position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      // Shake detection
      const data = shakeDataRef.current
      const now = Date.now()
      const deltaX = e.clientX - data.lastX
      const deltaY = e.clientY - data.lastY

      if (Math.abs(deltaX) > SHAKE_THRESHOLD || Math.abs(deltaY) > SHAKE_THRESHOLD) {
        const currentDirection = {
          x: deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0,
          y: deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0
        }

        const isDirectionChanged =
          (data.lastDirection.x !== 0 && currentDirection.x === -data.lastDirection.x) ||
          (data.lastDirection.y !== 0 && currentDirection.y === -data.lastDirection.y)

        if (isDirectionChanged) {
          if (now - data.lastShakeTime > SHAKE_TIME_WINDOW) {
            data.directionChanges = 0
          }

          data.directionChanges++
          data.lastShakeTime = now

          if (data.directionChanges >= SHAKE_COUNT_REQUIRED) {
            data.directionChanges = 0
            setShowCursorGlow(true)

            if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
            glowTimerRef.current = setTimeout(() => setShowCursorGlow(false), GLOW_DURATION)
          }
        }

        data.lastDirection = currentDirection
      }

      data.lastX = e.clientX
      data.lastY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (glowTimerRef.current) clearTimeout(glowTimerRef.current)
    }
  }, [])

  // Double-click to turn off glow
  useEffect(() => {
    const handleDoubleClick = () => {
      setShowCursorGlow(false)
      if (glowTimerRef.current) {
        clearTimeout(glowTimerRef.current)
        glowTimerRef.current = null
      }
    }

    window.addEventListener("dblclick", handleDoubleClick)
    return () => window.removeEventListener("dblclick", handleDoubleClick)
  }, [])

  // Section navigation handlers
  const addSectionIds = (sectionId) => {
    const element = document.getElementById(sectionId)
    setSectionIds((prev) => [...new Set([...prev, element.id])])

    const title = element.childNodes[0].textContent
    setNavBarItems((prev) => {
      if (!prev.some((e) => e.title === title)) {
        return [...prev, { title, sectionId: element.id }]
      }
      return prev
    })
  }

  const handleScroll = () => {
    const viewHeight = window.innerHeight * 0.3

    for (const id of sectionIds) {
      const rect = document.getElementById(id).getClientRects()[0]
      const offsetTop = rect.y
      const halfHeight = rect.height * 0.5

      if ((offsetTop <= 0 && offsetTop + halfHeight > viewHeight) ||
        (offsetTop > 0 && offsetTop < viewHeight)) {
        setCurrentSection(id)
      }
    }
  }

  useEffect(() => {
    if (sectionIds.length > 0) setCurrentSection(sectionIds[0])
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return (
    <>
      {/* Snowfall effect */}
      {!isLoading && showSnow && <Snowfall />}

      {/* Snowfall toggle button */}
      {!isLoading && (
        <button
          onClick={() => setShowSnow((prev) => !prev)}
          className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-lg flex items-center justify-center text-lg cursor-pointer text-white  backdrop-blur-sm"
          style={{
            background: showSnow ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
            opacity: showSnow ? 1 : 0.5,
          }}
          title={showSnow ? "Turn off snow" : "Turn on snow"}
          aria-label={showSnow ? "Turn off snow" : "Turn on snow"}
        >
          ❆
        </button>
      )}

      {/* Cursor glow effect */}
      {!isLoading && showCursorGlow && (
        <div
          ref={cursorRef}
          className="hidden lg:block fixed pointer-events-none w-80 h-80 rounded-full z-50"
          style={cursorGlowStyle}
        />
      )}

      {/* Main content */}
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="fade-in px-6 pt-12 lg:mt-12 mx-auto max-w-7xl grid gap-y-5 lg:grid-cols-[45%_55%]">
          <LeftSection navBarItems={navBarItems} currentSection={currentSection} />
          <RightSection onInitial={addSectionIds} />
        </div>
      )}
    </>
  )
}

export default App