import {Post} from "../../components";
import {useParams} from "react-router-dom";

const PostFromCommentPage = () => {

    const {Id} = useParams()

    return (
        <div className="PostFromCommentPage">
            <Post Id={Id}/>


        </div>
    )
}

export {PostFromCommentPage}