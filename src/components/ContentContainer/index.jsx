import { useEffect, useState } from "react";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Description from "../Description";
import Tech from "../Tech";
import FormattedDate from "../FormattedDate";
import Link from "../Link";

const ContentContainer = ({ onInitial, title: sectionTitle = "", data = [] }) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    
    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, []);

    return (
        <div id={SECTION_ID} className="scroll-m-14">
                <div className="lg:hidden sticky top-0 z-20 py-5 lg:px-4 bg-background/60 backdrop-blur-md">
                    <h2 className="text-primaryContent text-sm font-bold tracking-widest">{sectionTitle}</h2>
                </div>
            {data.map(({ date = "", title = "", link = "", titlelink = [], linkin = [], descriptions = [], skills = [], picture = "" }, index) => {
                const currentKey = `${SECTION_ID}-${index}`;
                const isCurrentHovered = isMouseEnter[currentKey];
                const isAnyHovered = Object.values(isMouseEnter).some(value => value);
                const shouldBlur = isAnyHovered && !isCurrentHovered;

                const hoverClass = isCurrentHovered
                    ? "lg:bg-primaryHover/80 lg:backdrop-blur-sm lg:rounded-md lg:shadow-xl"
                    : shouldBlur
                        ? "lg:blur-xm lg:opacity-25"
                        : "";

                return (
                    <div
                        key={`${SECTION_ID}-${index}-${title}`}
                        className={`grid grid-cols-[25%_75%] mb-5 transition-all duration-300 ${hoverClass} lg:px-4 py-4 relative`}
                        onMouseEnter={() =>
                            setIsMouseEnter((prev) => ({ ...prev, [currentKey]: true }))
                        }
                        onMouseLeave={() =>
                            setIsMouseEnter((prev) => ({ ...prev, [currentKey]: false }))
                        }
                    >
                        <div className="flex flex-col ">
                            <FormattedDate isHighLight={isCurrentHovered}>{date}</FormattedDate>
                            <Picture isHighLight={isCurrentHovered} picture={picture} />
                        </div>
                        <div className="grid gap-y-3">
                            <TitleLink isHighLight={isCurrentHovered} title={title} link={link} />
                            {descriptions.map((e, i) => (
                                <Description key={`${e}-description-${i}`} description={e} />
                            ))}
                            {titlelink.map((e, i) => (
                                <span key={`${e}-link-${i}`}>
                                    <Link titlelink={e} linkin={linkin[i]} />
                                </span>
                            ))}
                            {skills.map((e, i) => (
                                <span key={`${e}-skill-${i}`}>
                                    <Tech data={e} />
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContentContainer;
