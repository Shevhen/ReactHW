import {useEffect, useState} from "react";
import {allService} from "../../services";
import {Todo} from "../todo/Todo";

const Todos = () => {
    const [todo, setTodo] = useState([])

    useEffect(()=>{
        allService.getTodos().then(({data})=>setTodo(data))
    },[])
    return (
        <div className="Todos">
            {
                todo.map(todos=> <Todo key={todos.id} todos={todos}/>)
            }
        </div>
    );
}

export {Todos};