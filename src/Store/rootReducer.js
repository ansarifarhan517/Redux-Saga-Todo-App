import { combineReducers } from 'redux'
import { todoDataReducer, authenticateReducer } from './reducers'

export default combineReducers({ todoDataReducer, authenticateReducer })