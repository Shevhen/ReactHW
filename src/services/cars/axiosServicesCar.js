import axios from "axios";
import {baseCarsURL} from "../../configs";

const axiosServicesCar = axios.create({baseURL: baseCarsURL})

export {axiosServicesCar}