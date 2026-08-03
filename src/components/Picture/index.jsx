const isVideo = (src) => {
    if (typeof src !== 'string') return false;
    return /\.(mp4|webm|ogg)$/i.test(src);
};

const Picture = ({ isHighLight, picture, title }) => {
    if (!picture) {
        return null;
    }

    const borderClass = `w-5/6 rounded-md border-2 ${isHighLight ? "border-zinc-500" : "border-zinc-600"}`;

    if (isVideo(picture)) {
        return (
            <div>
                <video
                    src={picture}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={borderClass}
                    aria-label={title}
                    preload="metadata"
                />
            </div>
        );
    }

    return (
        <div>
            <img
                src={picture}
                alt={title}
                className={borderClass}
                loading="lazy"
                decoding="async"
                width={400}
                height={225}
            />
        </div>
    )
}

export default Picture