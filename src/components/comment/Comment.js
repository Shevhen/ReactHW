import {Component} from "react"

class Comment extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>Name:{this.props.value.name}</div>
                <div>Email:{this.props.value.email}</div>
                <div>Body:{this.props.value.body}</div>
                <hr/>
            </div>
        )
    }
}
export {Comment};