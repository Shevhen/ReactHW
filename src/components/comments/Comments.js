import {Component} from "react"
import {postService} from "../../services";
import {Comment} from "../comment/Comment";

class Comments extends Component{

    constructor(props) {
        super(props);
        this.state={post:[]}
    }

    componentDidMount() {
        postService.getAllComments().then(({data})=> this.setState({post: [...data]}))
    }


    render() {
        return(
            <div>
                {
                    this.state.post.map(comment=> <Comment key={comment.id} value={comment}/>)
                }
            </div>
        )
    }
}
export {Comments};