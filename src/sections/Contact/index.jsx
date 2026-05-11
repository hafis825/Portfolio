import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='flex items-end gap-5 text-2xl text-primarySub'>
            <a href="https://github.com/hafis825" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faGithub} title="Github"/></a>
            <a href="https://www.facebook.com/abdulhafis.waemusor" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faFacebook} title="Facebook"/></a>
            <a href="https://line.me/ti/p/VgVO17nRqQ" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faLine} title="Line"/></a>
            <a href="https://www.instagram.com/ithxf12/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faInstagram} title="Instagram"/></a>

        </div>
    )
}

export default Contact; 