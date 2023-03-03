import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, DELETE_FROM_TODOLIST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST } from './Constants'

export const addDatatoList = (data) => {
    console.log('Action Called', data)
    return {
        type: ADD_TODO_DATA,
        data: data
    }
}
export const getData = (data) => {
    return {
        type: GET_TODOLIST_DATA,
        data
    }
}
export const getTodoListDataRequest = () => {
    console.log('request')
    return {

        type: GET_TODOLIST_DATA_REQUEST,
    }
}

export const addTodoDataRequest = (data) => {
    console.log('requrst ',data)
    return {
        type: ADD_TODO_DATA_REQUEST,
        data
    }
}

export const deleteFromTodoList = (data) => {
    return {
        type: DELETE_FROM_TODOLIST,
        data: data
    }
}
