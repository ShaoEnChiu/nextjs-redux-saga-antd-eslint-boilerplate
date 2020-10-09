import * as actionTypes from '../constants/next.constants'

export const fetchNextDataRequest = params => ({
  type: actionTypes.FETCH_NEXT_DATA_REQUEST,
  params,
})

export const fetchNextDataSuccess = data => ({
  type: actionTypes.FETCH_NEXT_DATA_SUCCESS,
  data,
})

export const fetchNextDataFailed = error => ({
  type: actionTypes.FETCH_NEXT_DATA_FAILED,
  error,
})
