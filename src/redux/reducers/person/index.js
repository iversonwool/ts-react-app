import {ADD_PERSON} from '../../constant'

const initialState = [{id: '1', name: 'John'}]
export default function personReducer(state = initialState, action) {

  const {type, data} = action
  switch (type) {
    case ADD_PERSON:
      
      return [data, ...state]
  
    default:
      return state
  }

}