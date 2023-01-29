import {useNavigate} from "react-router-dom";
import css from './comment.module.css'

const Comment = ({comments}) => {
    const {email, name, postId, body} = comments
   let navigator = useNavigate()
    return (
        <div className={css.comment} >
            <button onClick={()=>navigator(`/posts/${postId.toString()}`)}>
                <div><h3>Name:{name}</h3> <h5><i> email: {email}</i></h5>
        </div>
                <div><h2>{body}</h2> <h4>Post Id:{postId}</h4></div>

            </button>
            <hr/>
        </div>
    );
}

export {Comment};