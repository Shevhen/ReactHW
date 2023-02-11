import {useEffect, useState} from "react";
import {carServices} from "../../../services";

const Cars = () => {
   let [Cars, setCars] = useState([])

    useEffect(()=>{
        carServices.getAll().then(({data})=>console.log(data))
    },[])
    return (
        <div>
            <div></div>
        </div>
    );
}

export {Cars};