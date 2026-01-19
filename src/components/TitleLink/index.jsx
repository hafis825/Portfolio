import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleLink = ({ isHighLight, title, link }) => {

    if (!link) {
        return <div className={`text-primaryContent ${isHighLight ? "lg:text-primaryTitle" : ""}`}>{title}</div>
    }

    return (
        <div className={`text-primaryContent ${isHighLight ? "text-primaryTitle" : ""}`}>
            <a href={link} target="_blank" className="group" rel="noreferrer">
                {title}
                <FontAwesomeIcon className="text-sm ml-1 -rotate-45 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink