const Picture = ({ isHighLight, picture, title }) => {
    if (!picture) {
        return null;
    }
    
    return (
        <div >
            <img src={picture} alt={title} className={`w-5/6 rounded-md border-2 border-gray-400 ${isHighLight ? "border-gray-200" : ""} `}/>
        </div>
    )
}

export default Picture