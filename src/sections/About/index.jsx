import { useEffect } from 'react';
const About = ({ onInitial, title, data = []}) => {
    const SECTION_ID = `${title}-section`
    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div className='space-y-4 scroll-m-24' id={SECTION_ID}>
            <div className="lg:hidden mt-24 sticky top-0 z-20 py-5 lg:px-4 bg-background/60 backdrop-blur-md">
                <h2 className="text-primaryContent text-sm font-bold tracking-widest">{title}</h2>
            </div>
            {
                data[0].description.map((item, index) => (
                    <div key={`desc-${index}`} className="text-primarySub lg:px-4">
                        {item.text}
                    </div>
                ))
            }
        </div>
    )
}

export default About