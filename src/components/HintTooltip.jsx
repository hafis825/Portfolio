import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons"

// Shared styles for hint tooltips
const tooltipStyle = {
    right: "24px",
    bottom: "24px",
    background: "rgba(30, 30, 40, 0.75)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 60px rgba(3, 140, 101, 0.3), 0 0 100px rgba(3, 140, 101, 0.15)",
}

const iconContainerStyle = {
    background: "rgba(255, 255, 255, 0.08)",
}

const accentColor = "#038C65"

function HintTooltip({ title, subtitle, iconAnimation, isFadingOut }) {
    return (
        <div
            className={`hidden lg:flex fixed pointer-events-none z-50 items-center gap-3 px-4 py-3 rounded-lg ${isFadingOut ? 'fade-out' : 'fade-in'}`}
            style={tooltipStyle}
        >
            {/* Icon container */}
            <div
                className="flex items-center justify-center w-8 h-8 rounded-md"
                style={iconContainerStyle}
            >
                <FontAwesomeIcon
                    icon={faComputerMouse}
                    className={`text-slate-300 text-sm ${iconAnimation || ''}`}
                    shake={iconAnimation === 'shake'}
                />
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-0.5">
                <span className="text-slate-100 text-sm font-medium whitespace-nowrap">
                    {title}
                </span>
                <span
                    className="text-xs font-medium whitespace-nowrap"
                    style={{ color: accentColor }}
                >
                    {subtitle}
                </span>
            </div>
        </div>
    )
}

export default HintTooltip
