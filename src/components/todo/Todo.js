import css from './todo.module.css'

const Todo = ({todos}) => {
    const {userId,title,completed} = todos
    let status
    if(completed){
        status = 'complete'
    }else {status = 'not complete'}
    return (
        <div className={css.todo}>
            <div><h3><b>User: {userId}</b> <i>Title: {title}</i> </h3></div>
            <div><i>this todo is: {status}</i>  </div>
            <hr/>
        </div>
    );
}

export {Todo};