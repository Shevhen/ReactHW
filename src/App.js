import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {AboutPage, UserPage} from "./pages";

const App = () => {

   const navigate = useNavigate()
  return (
    <div className="App">
        <div>
        <button onClick={()=>navigate('/users')}>User</button>
        <button onClick={()=>navigate('/about')}>About</button>

        </div>
        <hr/>

        <Routes>
            <Route path={'/users'} element={<UserPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>



    </div>
  );
}

export {App};


// import './App.css';
// import {useReducer} from "react";
//
// const App = () => {
//
//     const reducer = (state,action) =>{
//
//         switch (action.type){
//             case 'INC1':
//                 return{...state, count1: state.count1+1}
//             case 'DEC1':
//                 return{...state, count1: state.count1-1}
//             case 'INC2':
//                 return{...state, count2: state.count2+1}
//             case 'DEC2':
//                 return{...state, count2: state.count2-1}
//             case 'RES':
//                 return <div>I am here</div>
//             // {count2:0, count1:0}
//             default:
//                 return {...state}
//         }
//     }
//
//     const initValue = () =>(
//         {count1:0, count2:0}
//     )
//
//
//     const [state, dispatch] = useReducer(reducer, null, initValue)
//     return (
//         <div className="App">
//             <div>Count1: {state.count1}</div>
//             <button onClick={()=>dispatch({type:'INC1'})}>inc</button>
//             <button onClick={()=>dispatch({type:'DEC1'})}>inc</button>
//             <div>Count2: {state.count2}</div>
//             <button onClick={()=>dispatch({type:'INC2'})}>inc</button>
//             <button onClick={()=>dispatch({type:'DEC2'})}>inc</button>
//             <hr/>
//
//             <button onClick={()=>dispatch({type:'RES'})}>reset</button>
//
//         </div>
//     );
// }
//
// export {App};
