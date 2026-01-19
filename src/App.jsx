import { useEffect, useState, useRef } from "react"
import "./App.css"
import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"
import SkeletonLoader from "./components/SkeletonLoader"

function App() {
  const [sectionIds, setSectionIds] = useState([])
  const [navBarItems, setNavBarItems] = useState([])
  const [currentSection, setCurrentSection] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [showCursorGlow, setShowCursorGlow] = useState(false)
  const cursorRef = useRef(null)
  const glowTimerRef = useRef(null)
  const shakeDataRef = useRef({
    lastX: 0,
    lastY: 0,
    directionChanges: 0,
    lastDirection: { x: 0, y: 0 },
    lastShakeTime: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Combined: Shake mouse detection + cursor position update
  useEffect(() => {
    const SHAKE_THRESHOLD = 30 // minimum movement to count as direction change
    const SHAKE_COUNT_REQUIRED = 5 // number of direction changes needed
    const SHAKE_TIME_WINDOW = 500 // milliseconds to detect shake
    const GLOW_DURATION = 10 * 60 * 1000 // 10 minutes in milliseconds

    const handleMouseMove = (e) => {
      // Update cursor glow position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      // Shake detection logic
      const data = shakeDataRef.current
      const now = Date.now()

      const deltaX = e.clientX - data.lastX
      const deltaY = e.clientY - data.lastY

      // Check if movement is significant enough
      if (Math.abs(deltaX) > SHAKE_THRESHOLD || Math.abs(deltaY) > SHAKE_THRESHOLD) {
        const currentDirection = {
          x: deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0,
          y: deltaY > 0 ? 1 : deltaY < 0 ? -1 : 0
        }

        // Check if direction changed (opposite direction)
        if ((data.lastDirection.x !== 0 && currentDirection.x === -data.lastDirection.x) ||
          (data.lastDirection.y !== 0 && currentDirection.y === -data.lastDirection.y)) {

          // Reset count if too much time passed
          if (now - data.lastShakeTime > SHAKE_TIME_WINDOW) {
            data.directionChanges = 0
          }

          data.directionChanges++
          data.lastShakeTime = now

          // Shake detected!
          if (data.directionChanges >= SHAKE_COUNT_REQUIRED) {
            data.directionChanges = 0

            // Enable cursor glow
            setShowCursorGlow(true)

            // Clear existing timer if any
            if (glowTimerRef.current) {
              clearTimeout(glowTimerRef.current)
            }

            // Set timer to disable after 10 minutes
            glowTimerRef.current = setTimeout(() => {
              setShowCursorGlow(false)
            }, GLOW_DURATION)
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
      if (glowTimerRef.current) {
        clearTimeout(glowTimerRef.current)
      }
    }
  }, [])

  // Double-click to turn off cursor glow immediately
  useEffect(() => {
    const handleDoubleClick = () => {
      setShowCursorGlow(false)
      // Clear the auto-off timer if exists
      if (glowTimerRef.current) {
        clearTimeout(glowTimerRef.current)
        glowTimerRef.current = null
      }
    }

    window.addEventListener("dblclick", handleDoubleClick)

    return () => {
      window.removeEventListener("dblclick", handleDoubleClick)
    }
  }, [])

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id
    setSectionIds((prev) => [...new Set([...prev, elementId])])

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    const obj = { title: elementTitle, sectionId: elementId }
    setNavBarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj]
      }
      return prev
    })
  }

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index]
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y
      const height = document.getElementById(el).getClientRects()[0].height * 0.5
      const viewHeight = window.innerHeight * 0.3

      if (elOffsetTop <= 0) {
        if (elOffsetTop + height > viewHeight) {
          setCurrentSection(el)
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(el)
      }
    }
  }

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0])
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds])

  return (
    <>
      {/* Cursor shadow element */}
      {!isLoading && showCursorGlow && (
        <div
          ref={cursorRef}
          className="hidden lg:block fixed pointer-events-none w-80 h-80 rounded-full z-50"
          style={{
            left: "0px",
            top: "0px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "rgba(131, 136, 248, 0.07)",
            boxShadow: "0 0 150px 150px rgba(100, 108, 255, 0.07)",
            filter: "blur(15px)"
          }}
        />
      )}

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