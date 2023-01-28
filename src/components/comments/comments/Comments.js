import {Comment} from "../comment/Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(value => <Comment key={value.id} coments={value}/>)}
        </div>
    );
}

export {Comments};