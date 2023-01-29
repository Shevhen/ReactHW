import {useEffect, useState} from "react";
import {allService} from "../../services";
import {Album} from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        allService.getAlbums().then(({data})=>setAlbums(data))
    },[])

    return (
        <div className="Albums">
            {
                albums.map(album=> <Album key={album.id} albums={album}/>)
            }
        </div>
    );
}

export {Albums};