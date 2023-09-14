import {DECREMENT, INCREMENT, INCREMENT_ASYNC} from '../../constant'

export const increment = (value) => ({ type: INCREMENT, data: value })
export const decrement = (value) => ({ type: DECREMENT, data: value })

export const incrementAsync = (delay) => (dispatch) => {
  
  setTimeout(() => {
    dispatch({type: INCREMENT_ASYNC, data: 1})
  }, delay)
}