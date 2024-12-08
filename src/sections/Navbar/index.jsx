import { useState } from "react"

const Navbar = ({ navBarItems, currentSection }) =>{
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})
    }

    return (
        <div className='hidden lg:flex flex-col gap-5 text-sm'>
            {
                navBarItems.map((e, i) => (
                    <div 
                        key={`nav-${e}-${i}`} 
                        className="flex items-center mx-3 cursor-pointer w-2/6"
                        onClick={() => handleClick(e.sectionId)}
                        onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
                    >
                        <span className={`bg-primaryBase h-[1px] inline-block transition-all mr-4 ${isMouseEnter[e.title] || currentSection === e.sectionId ? "pr-14 bg-primaryContent" : "pr-7"} `}></span>
                        <span className={`transition-all ${isMouseEnter[e.title] || currentSection === e.sectionId ? "text-primaryContent" : ""} `}>{e.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar; 