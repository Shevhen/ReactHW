import './App.css';
import {useEffect, useState} from "react";
import {GetUser, GetUsers} from "./resurs/Api";
import {User} from "./components/User";

function App() {

    let [users, setUsers] = useState([])
    let [userID, setUserID] = useState([])
    useEffect(()=>{
        GetUsers().then(value => {
            setUsers(value)})},[])

    function Click(id){
            GetUser(id).then(value => {
                console.log(value)
                setUserID(value)
        })
    }

    return (

        <div className="App">
            <div>
                <h2>Username: {userID.username} </h2>
                <h2>Phone: {userID.phone}</h2>
                <h2>Email: {userID.email}</h2>
                <h2>Site: {userID.website} </h2>
            </div>

            {
                users.map(value => <User key={value.id} user={value} clickId={Click}/>)
            }
        </div>
    );
}

export {App};


//
// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//https://jsonplaceholder.typicode.com/users
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)