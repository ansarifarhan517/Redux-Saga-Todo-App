import { all, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { ADD_TODO_DATA, ADD_TODO_DATA_REQUEST, GET_TODOLIST_DATA, GET_TODOLIST_DATA_REQUEST, IS_AUTHENTIC, IS_AUTHENTIC_REQUEST } from './Constants'


// Our worker Saga: 
export function* getToDolistData() {
    const result = yield fetch("./data.json")
    yield put({ type: GET_TODOLIST_DATA, payload: yield result.json() })
}

export function* isAuthencate(action) {
    console.log('isAuthencateWorker')
    const result = yield fetch("./data.json")
    const data = yield  result.json()
    const user = data.filter(i => i.username == action.data.username && i.password == action.data.password)
    yield put({ type: IS_AUTHENTIC, payload: user })
    yield put({ type: GET_TODOLIST_DATA, payload: user })

}


// Our watcher Saga: 
export function* getToDolistDataWatcher() {
    yield takeLatest(GET_TODOLIST_DATA_REQUEST, getToDolistData)

}
export function* isAuthencateWatcher() {

    console.log('isAuthencateWatcher')
    yield takeLatest(IS_AUTHENTIC_REQUEST, isAuthencate)

}


// Our Root watcher Saga: 
export function* rootSaga() {

    console.log('RootSaga')
    yield all([
        isAuthencateWatcher(),
        getToDolistDataWatcher()
    ])
}



