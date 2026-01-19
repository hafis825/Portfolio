const Picture = ({ isHighLight, picture, title }) => {
    if (!picture) {
        return null;
    }
    
    return (
        <div >
            <img src={picture} alt={title} className={`w-5/6 rounded-md border-2  ${isHighLight ? "border-zinc-500" : "border-zinc-600"} `}/>
        </div>
    )
}

export default Picture