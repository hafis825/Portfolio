import { useEffect, useState } from "react";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Description from "../Description";
import Tech from "../Tech";
import FormattedDate from "../FormattedDate";

const ContentContainer = ({ onInitial,title: sectionTitle = "", data = [],}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    
    const SECTION_ID = `${sectionTitle}-section`;
    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-m-14">
                <div className='lg:hidden text-primaryContent font-semibold'>{sectionTitle}</div>
                {
                    data.map(({
                        date = "",
                        title = "", 
                        link = "", 
                        descriptions = [], 
                        skills = [], 
                        picture = ""
                    }, index)=> (
                        <div
                            key={`${SECTION_ID}-${index}-${title}`} 
                            className={`grid grid-cols-[25%_75%] mb-5 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryHover rounded-md shadow-xl" : ""}  px-4 py-4`}
                            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]:true })}
                            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]:false })}
                        >
                            <div className="flex flex-col gap-4">
                                <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                                <Picture isHighLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} picture={picture}/>
                            </div>
                            <div className="grid gap-y-4">
                                <TitleLink isHighLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} title={title} link={link}/>
                                {
                                    descriptions.map((e, i)=>(
                                        <Description key={`${e}-descirption-${i}`} descirption={e} />
                                    ))
                                }
                                {
                                    skills.map((e, i)=>(
                                        <span><Tech key={`${e}-skill-${i}`} data={e} /></span>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
        </div>
    )
}

export default ContentContainer