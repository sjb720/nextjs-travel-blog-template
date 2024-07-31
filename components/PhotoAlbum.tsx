import { useState } from "react";

type PhotoAlbumProps = {
    photoAlbumLink: string;
}

export default function PhotoAlbum (props : PhotoAlbumProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" href={props.photoAlbumLink} style={{display:'inline-block'}}><button style={{display:'flex', alignItems:'center', justifyContent:'center', gap: 8}}>
        <img style={{
            transform: isHovered ? "rotate(-360deg)" : "rotate(0deg)",
            transition: "transform 0.5s"
        }} src="/photos.png" width={24}/>
        See Photo Album
    </button>
    </a>
}