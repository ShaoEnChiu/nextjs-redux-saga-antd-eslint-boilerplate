import { all, call, put, takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../constants/next.constants'
import {
  fetchNextDataSuccess,
  fetchNextDataFailed,
} from '../actions/next.actions'
import { fetchNextDataAPI } from '../api/next'

function* fetchNextData() {
  try {
    const response = yield call(fetchNextDataAPI)
    yield put(fetchNextDataSuccess(response))
  } catch (error) {
    yield put(fetchNextDataFailed(error))
  }
}

function* watchNext() {
  yield all([takeEvery(actionTypes.FETCH_NEXT_DATA_REQUEST, fetchNextData)])
}

export default watchNext
