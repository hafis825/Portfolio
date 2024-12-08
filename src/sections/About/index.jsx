import { useEffect } from 'react';
const About = ({ onInitial, title, data = []}) => {
    const SECTION_ID = `${title}-section`
    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div className='space-y-4 scroll-m-24' id={SECTION_ID}>
            <div className='lg:hidden text-primaryContent font-semibold'>{title}</div>
            {
                data[0].description.map((item, index) => (
                    <div key={`desc-${index}`} className="text-primarySub text-base font-semibold px-4">
                        {item.text}
                    </div>
                ))
            }
            <div ></div>
        </div>
    )
}

export default About