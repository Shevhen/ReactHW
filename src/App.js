import './App.css';
import {useEffect, useState} from "react";
import {RikiMortyFetch} from "./resurs/RikiMortyFetch";
import {simpsonsArr} from "./resurs/Simpsons";
import {RikiMorty, Simpsons} from "./components/Heroes";

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

function App(){
    let [heroes, setHeroes] = useState([])
    useEffect(()=>{
        RikiMortyFetch().then(value => {
            value.results.splice(6,20)
            setHeroes(value.results)})},[])
    return(
        <div>
            <div className='simpson'>
                <h1>Simpsons</h1>
                {
                    simpsonsArr.map((value,index) => ({id: index+1,name:value.name,surname:value.surname,are:value.age,photo:value.photo,info:value.info }))
                                .map(value => <Simpsons key={value.id} value={value}/>)
                }
            </div>
            <div className='rikiMorty'>
                <h1>Rick & Morty</h1>
                {
                    heroes.map(value => <RikiMorty key={value.id} value={value}/>)
                }
            </div>
        </div>
    )
}
export {App};

