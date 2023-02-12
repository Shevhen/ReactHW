import {Component} from "react"
import {postService} from "../services";
import {Post} from "./post/Post";

class ClassComponents extends Component{

    constructor(props) {
        super(props);
        this.state={post:[]}
    }

    componentDidMount() {
        postService.getAll().then(({data})=> this.setState({post: [...data]}))
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
export {ClassComponents};