import { SEARCH, CLEAR_SEARCH } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    case CLEAR_SEARCH:
      return state;
    default:
      return state;
  }
}
