import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, DELETE_FROM_TODOLIST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST, IS_AUTHENTIC, IS_AUTHENTIC_REQUEST, LOGOUT } from './Constants'

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
    console.log('requrst ', data)
    return {
        type: ADD_TODO_DATA_REQUEST,
        data
    }
}

export const deleteFromTodoList = (data) => {
    return {
        type: DELETE_FROM_TODOLIST,
        data: +data
    }
}

export const isAuthenticateRequest = (data) => {
    console.log('isAuthenticateRequest from action', data)
    return {
        type: IS_AUTHENTIC_REQUEST,
        data
    }
}

export const isAuthenticate = (data) => {
    console.log('isAuthenticate from action',data)

    return {
        type: IS_AUTHENTIC,
        data
    }
}


export const logout = () => {
    console.log('Logout');
    return {
        type: LOGOUT,
    }
}