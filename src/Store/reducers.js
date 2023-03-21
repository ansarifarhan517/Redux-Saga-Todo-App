import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, DELETE_FROM_TODOLIST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST, IS_AUTHENTIC, LOGOUT } from './Constants'


// let initalState=[]
export const todoDataReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO_DATA_REQUEST:
            const temp = [...state]
            temp[0].Todos.push(action.data)
            return temp
        case DELETE_FROM_TODOLIST:
            state[0].Todos = state[0].Todos.filter((i, index) => index != action.data)
            return [...state]
        case GET_TODOLIST_DATA:
            return action.payload
        default:
            return state
    }
}


export const authenticateReducer = (state = { isAuthentic: false, user: [] }, action) => {
    switch (action.type) {
        case IS_AUTHENTIC:
            console.log(state,action)
            const temp = {
                isAuthentic: action.payload.length > 0 ? true : false,
                user: action.payload
            }
            console.log(temp)
            return temp
        case LOGOUT:
            return { user:[], isAuthentic: false }
        default:
            return state
    }
}