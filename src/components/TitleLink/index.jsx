// Inline SVG arrow icon (fa-arrow-right, rotated -45deg)
const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="inline-block w-3 h-3 ml-1 -rotate-45 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
        aria-hidden="true"
    >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
);

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`text-primaryContent ${isHighLight ? "lg:text-primaryTitle" : ""}`}>{title}</div>
    }

    return (
        <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""}`}>
            <a href={link} target="_blank" className="group" rel="noreferrer">
                {title}
                <ArrowIcon />
            </a>
        </div>
    )
}

export default TitleLink