import Contact from "../contact"
import Header from "../Header"
import Navbar from "../navbar"


const LeftSection = ({ navBarItems, currentSection }) =>{
    return (
        <div className="pr-4">
            <div className='sticky top-24 grid gap-y-5 lg:grid-rows-[2fr_2fr_30%] lg:h-[80vh]'>
                <Header />
                <Navbar navBarItems={navBarItems} currentSection={currentSection}/>
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection