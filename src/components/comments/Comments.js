import {useEffect, useState} from "react";
import {allService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        allService.getComments().then(({data})=>setComments(data))
    },[])
    return (
        <div className="Comments">
            {
                comments.map(comments=> <Comment key={comments.id} comments={comments}/>)
            }
        </div>
    );
}

export {Comments};