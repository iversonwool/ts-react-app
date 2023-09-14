import {INCREMENT,DECREMENT, INCREMENT_ASYNC} from '../../constant'

const initialState = 0
export default function countReducer(state = initialState, action) {
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      
      return state + data
    case DECREMENT:
      
      return state - data

    case INCREMENT_ASYNC:
      
      return state + data
    default:
      return state
  }
}