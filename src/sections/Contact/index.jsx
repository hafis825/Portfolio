import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'

const Contact = () =>{
    return (
        <div className='flex items-end gap-5 text-2xl text-primarySub'>
            <a href="https://github.com/hafis825" target='_blank'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faGithub} /></a>
            <a href="https://www.facebook.com/abdulhafis.waemusor" target='_blank'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faFacebook} /></a>
            <a href="https://line.me/ti/p/VgVO17nRqQ" target='_blank'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faLine} /></a>
            <a href="https://www.instagram.com/ithxf12/" target='_blank'><FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faInstagram} /></a>

        </div>
    )
}

export default Contact; 