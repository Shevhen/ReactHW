import {useEffect, useState} from "react";
import {allService} from "../../services";

const Post = ({Id}) => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{allService.getPostByID(Id).then(({data})=> {
                setPosts(data)})},[Id])

    return (
        <div className="Posts">
            {
                posts&&<><div> <h1>{posts.title}</h1></div>
                    <hr/>
                    <div> <i><h2>{posts.body}</h2></i> </div>
                </>
            }
        </div>
    );
}

export {Post};