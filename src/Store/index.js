import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga, watchAddToDoListData, watchGetToDoListData } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)

)

sagaMiddleware.run(rootSaga)

export default store