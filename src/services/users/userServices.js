import {axiosServices} from "./axiosServices";
import {urls} from "../../configs";

const userServices ={
    getAll:()=>axiosServices.get(urls.users),
    getAllComments:()=>axiosServices.get(urls.comments),
    createUser:(newUser)=>axiosServices.post(urls.users, newUser),
    createComment:(newComment)=>axiosServices.post(urls.comments, newComment)
}
export {userServices}