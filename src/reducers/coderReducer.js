import { FETCH_CODERS } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_CODERS:
            console.log('action.payload');
            console.log('action.payload');
            console.log('action.payload');
            console.log('action.payload');

            console.log(action.payload);
            console.log(action.payload);
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
