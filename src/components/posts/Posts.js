import {Component} from "react"
import {Post} from "../post/Post";
import {postService} from "../../services";

class Posts extends Component{

    constructor(props) {
        super(props);
        this.state={post:[]}
    }

    componentDidMount() {
        postService.getAllPosts().then(({data})=> this.setState({post: [...data]}))
    }


    render() {
        return(
            <div>
                {
                    this.state.post.map(post=> <Post key={post.id} value={post}/>)
                }
            </div>
        )
    }
}
export {Posts};