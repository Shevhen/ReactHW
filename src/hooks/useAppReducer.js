import {useContext} from "react";
import {StateContext} from "../hoc/StateProvider";


const useAppRedecer = (item)=> item(useContext(StateContext))

export {useAppRedecer}