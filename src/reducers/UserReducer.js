const userActionsTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE'
}

const userActions = {
    ADD:(item)=>({type:userActionsTypes.ADD, payload:item}),
    DELETE:(id)=>({type:userActionsTypes.DELETE, payload:id})
}

const initial = ()=>[]

const myUserReducer = (state, action) =>{
    switch (action.type){
        case userActionsTypes.ADD:
            const slice = state.slice(-1);
            const id = slice.length?slice[0].id+1:0
            return [...state, {id, ...action.payload}]

        case userActionsTypes.DELETE:
           const index = state.findIndex(value => value.id === action.payload)
            state.splice(index, 1)
            return [...state]

    }
}

export {userActions, myUserReducer, initial}