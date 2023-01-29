import {axiosService} from "./asiosService";
import {urls} from "../configs";

const allService = {
    getTodos: ()=>axiosService.get(urls.todos),
    getAlbums: ()=>axiosService.get(urls.albums),
    getComments: ()=>axiosService.get(urls.comments),
    getPostByID:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    allService
}