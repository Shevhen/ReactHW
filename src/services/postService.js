import {axiosService} from "./asiosService";
import {urls} from "../configs";

const postService = {
    getAllPosts: ()=>axiosService.get(urls.posts),
    getAllComments: ()=>axiosService.get(urls.comments)
}

export {
    postService
}