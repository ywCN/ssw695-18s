import { combineReducers } from 'redux';
import authReducer from './authReducers';

const rootReducer = combineReducers({
    user: authReducer
});

export default rootReducer;

// TODO: make sure the init auth is false
