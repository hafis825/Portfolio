const Tech = ({ data }) => {
    return (
        <div className="flex gap-2 text-sm">
            {
                data.map((item, i) => (
                    <div key={`${item}-${i}`} className="text-primarybtn bg-primarybgbtn px-2 py-1.5 rounded-xl">{item}</div>
                ))
            }
        </div>
    )
}

export default Tech;