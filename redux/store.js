import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootSaga from '../sagas'
import { fromJS } from 'immutable'

const sagaMiddleware = createSagaMiddleware()

const stateLogger = createLogger({ stateTransformer: state => state.toJS() })

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default (preloadState = fromJS({})) => {
  const store = createStore(
    rootReducer,
    preloadState,
    bindMiddleware([thunkMiddleware, sagaMiddleware, stateLogger])
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
