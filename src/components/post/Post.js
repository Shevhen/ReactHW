import {Component} from "react"

class Post extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>Title:{this.props.value.title}</div>
                <div>Body:{this.props.value.body}</div>
                <hr/>
            </div>
        )
    }
}
export {Post};