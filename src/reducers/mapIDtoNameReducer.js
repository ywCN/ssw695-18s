import { MAP_CODER_ID_TO_NAME } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case MAP_CODER_ID_TO_NAME:
      return action.payload;
    default:
      return state;
  }
}
