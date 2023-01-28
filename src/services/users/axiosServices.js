import axios from "axios";
import {baseUrl} from "../../configs";

const axiosServices = axios.create({baseURL:baseUrl})

export {axiosServices}