import { all, fork } from 'redux-saga/effects'
import next from './next.sagas'

function* rootSaga() {
  yield all([fork(next)])
}

export default rootSaga
