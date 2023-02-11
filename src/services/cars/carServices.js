import {axiosServices} from "../users/axiosServices";
import {urlsCars} from "../../configs";

const carServices ={
    getAll:()=>axiosServices.get(urlsCars.cars)
}
export {carServices}