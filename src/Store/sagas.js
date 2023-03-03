import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST } from './Constants'


// Our worker Saga: will perform the async increment task
export function* getToDolistData() {
    const result = yield fetch("./data.json")
    yield put({ type: GET_TODOLIST_DATA, payload: yield result.json() })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetToDoListData() {
    yield takeEvery(GET_TODOLIST_DATA_REQUEST, getToDolistData)
}


// Our worker Saga: will perform the async increment task
export function* addToDolistData(data) {
    console.log(data)
    const result = yield fetch("./data.json")
    yield put({ type: ADD_TODO_DATA, payload: yield result.json() })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAddToDoListData() {
    console.log('first')
    yield takeEvery(ADD_TODO_DATA_REQUEST, addToDolistData)
}


