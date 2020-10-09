import { fromJS } from 'immutable'

export const CounterState = fromJS({
  counter: {
    count: 0,
  },
})

export const NextState = fromJS({
  next: {
    nextData: {},
  },
})
