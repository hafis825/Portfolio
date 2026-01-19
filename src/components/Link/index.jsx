import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Link = ({ titlelink, linkin }) => {
    return (
        <div className="flex flex-wrap text-xs">
            {
                titlelink.map((e, i) => (
                    <a key={`${e}-${i}`} href={linkin[i]} target="_blank" rel="noopener noreferrer" className="hover:text-primarybtn transition-all text-primaryContent text-sm px-1.5 py-1 rounded-full mr-1.5 mt-2"><FontAwesomeIcon icon={faLink} className="w-3 h-3" /> {e}</a>
                ))
            }
        </div>
    )
}

export default Link