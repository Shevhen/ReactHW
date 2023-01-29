import {Outlet} from "react-router-dom";
import {Header} from "../components/headers/Header";

const MaineLayOut = () => {
    return (
        <div className='MaineLayOut'>
            <Header/>
            <Outlet/>
        </div>
    );
}

export {MaineLayOut};