import * as actionTypes from '../../constants/counter.constants'
import { handleActions } from 'redux-actions'
import { CounterState } from '../../constants/models'

export default handleActions(
  {
    // eslint-disable-next-line no-unused-vars
    [actionTypes.INCREMENT_COUNTER]: (state, action) => {
      return state.mergeIn(['counter'], {
        count: state.getIn(['counter', 'count']) + 1,
      })
    },
    // eslint-disable-next-line no-unused-vars
    [actionTypes.DECREMENT_COUNTER]: (state, action) => {
      return state.mergeIn(['counter'], {
        count: state.getIn(['counter', 'count']) - 1,
      })
    },
  },
  CounterState
)
