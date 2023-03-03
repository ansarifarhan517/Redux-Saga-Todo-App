import { ADD_TODO_DATA, DELETE_FROM_TODOLIST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST } from './Constants'


// let initalState=[]
export const todoDataReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO_DATA:
            console.log(state)
            return [action.data, ...state]
        case DELETE_FROM_TODOLIST:
            return action.data
        case GET_TODOLIST_DATA:
            console.log('actual data',action)
            return action.payload
        default:
            return state
    }
}