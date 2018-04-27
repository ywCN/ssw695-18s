import { FETCH_ALL_FOLLOWERS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}
