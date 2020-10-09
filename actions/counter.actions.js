import * as actionTypes from '../constants/counter.constants'

export const incrementCounter = () => ({
  type: actionTypes.INCREMENT_COUNTER,
})

export const decrementCounter = () => ({
  type: actionTypes.DECREMENT_COUNTER,
})
