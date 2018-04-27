import { combineReducers } from 'redux';
import authReducer from './authReducers';
import coderReducer from './coderReducer';
import portfolioReducer from './portfolioReducer';
import projectReducer from './projectReducer';
import setCurrentCoderPortfolioReducer from './setCurrentCoderPortfolioReducer';
import searchReducer from './searchReducer';
import followerReducers from './followerReducers';

const rootReducer = combineReducers({
  user: authReducer,
  coders: coderReducer,
  currentUserPortfolio: portfolioReducer,
  currentEdittingProject: projectReducer,
  currentCoderPortfolio: setCurrentCoderPortfolioReducer,
  searchResults: searchReducer,
  followers: followerReducers
});

export default rootReducer;

// TODO: make sure the init auth is false
