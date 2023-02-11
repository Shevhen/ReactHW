import './App.css';
import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {carServices, userServices} from "./services";
import {Comments, CommentsForm} from "./components/comments";


// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового
// юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий
//     комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
//
//     http://owu.linkpc.net/carsAPI/v1/doc
//         Реалізувати створення, видалення та оновлення машин

const App = () => {
  // const [user, setUser]=useState([])
  //
  // useEffect(()=>{
  //   userServices.getAll().then((data)=>
  //       setUser(data.data)
  //   )
  // },[])
  //
  //   const [comments, setComments] = useState([])
  //
  //   useEffect(()=>{
  //       userServices.getAllComments().then((data)=> {
  //           console.log(data.data)
  //           setComments(data.data)
  //       })
  //   },[])

    let [Cars, setCars] = useState([])

    useEffect(()=>{
        carServices.getAll().then(({data})=>console.log(data))
    },[])

    return (
    <div className="App">
      {/*<UserForm setUser={setUser}/>*/}
      {/*  <hr/>*/}
      {/*<Users user={user}/>*/}
      {/*<hr/>*/}
      {/*  <CommentsForm setComments={setComments}/>*/}
      {/*<Comments comments={comments}/>*/}
    </div>
  );
}

export {App};
