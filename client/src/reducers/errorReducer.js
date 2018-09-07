import { GET_ERRORS, SET_EMPTY_ERRORS, CLEAR_ERRORS } from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case SET_EMPTY_ERRORS:
      return {};
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}