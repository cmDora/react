import { GET_LIST } from './constants'

const defaultState = {
  list: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, list: action.data }
    default:
      return state
  }
}
