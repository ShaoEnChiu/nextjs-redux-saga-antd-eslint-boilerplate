import counterReducer from './counterReducer'
import nextReducer from './nextReducer'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  counter: counterReducer,
  next: nextReducer,
})

export default rootReducer
