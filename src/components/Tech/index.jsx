const Tech = ({ data }) => {
    return (
        <div className="flex flex-wrap text-xs">
            {
                data.map((item, i) => (
                    <div key={`${item}-${i}`} className="text-primarybtn bg-primarybgbtn px-3 py-1 rounded-full mr-1.5 mt-2">{item}</div>
                ))
            }
        </div>
    )
}

export default Tech;