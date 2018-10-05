import { PICK_CATEGORY } from '../actions/type'

export default function (state = 'To do', action) {
  switch (action.type) {
    case PICK_CATEGORY:
      return action.payload

    default:
      return state
  }
}