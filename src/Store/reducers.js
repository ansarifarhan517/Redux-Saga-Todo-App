import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, DELETE_FROM_TODOLIST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST, IS_AUTHENTIC, LOGOUT } from './Constants'


// let initalState=[]
export const todoDataReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO_DATA_REQUEST:
            const temp = [...state]
            temp[0].Todos.push(action.data)
            return temp
        case DELETE_FROM_TODOLIST:
            console.log(state[0].Todos.filter((i,index)=> index != action.data))
            return state[0].Todos.filter((i,index)=> index != action.data)
        case GET_TODOLIST_DATA:
            console.log('actual data', action)
            return action.payload
        default:
            return state
    }
}


export const authenticateReducer = (state = false, action) => {
    switch (action.type) {
        case IS_AUTHENTIC:
            console.log('isAuthentic', action.payload.length > 0 ? true : false)
            return action.payload.length > 0 ? true : false
        case LOGOUT:
            console.log('first')
            return state = false
        default:
            return state
    }
}