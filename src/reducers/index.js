import { combineReducers } from 'redux';
import authReducer from './authReducers';
import coderReducer from './coderReducer';
import portfolioReducer from './portfolioReducer';

const rootReducer = combineReducers({
    user: authReducer,
    coders: coderReducer,
    user_portfolio: portfolioReducer
});

export default rootReducer;

// TODO: make sure the init auth is false
