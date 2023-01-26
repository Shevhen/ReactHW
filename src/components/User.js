function User ({user,clickId}){

    return(
        <div className='user'>
            <h1>
                ID: {user.id} Name: {user.name}
            </h1>
                <button onClick={()=>clickId(user.id)}>Info about</button>

        </div>
    )
}

export {User}

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//https://jsonplaceholder.typicode.com/users