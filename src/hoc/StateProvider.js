import {createContext, useReducer} from "react";
import {initial, myUserReducer} from "../reducers/UserReducer";

const StateContext = createContext(null)

const StateProvider = () => {
    const reducer = {
        useReducer:useReducer(myUserReducer, null, initial)
    }
    return (
        <StateContext.Provider value={reducer}>

        </StateContext.Provider>
    );
}

export {StateProvider, StateContext};