import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""}`}>{title}</div>
    }

    return (
        <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""}`}>
            <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`text-sm ml-1 -rotate-45 transition-all ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink