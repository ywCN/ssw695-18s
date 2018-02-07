// import axios from 'axios';
import { createHashHistory } from 'history';
import {
    LOGIN,
    LOGOUT,
    FETCH_CODERS,
    FETCH_PORTFOLIO,
    SAVE_PORTFOLIO,
    SAVE_PROJECT
} from './types';

const browserHistory = createHashHistory();

export const fetchCoders = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    dispatch({
        type: FETCH_CODERS,
        payload: ['coder 1', 'coder 2', 'coder 3', 'coder 4']
    });
};

export const login = user => async dispatch => {
    console.log('login action is called');
    dispatch({ type: LOGIN, payload: user });
};

export function logout() {
    // set the user object to null in redux-store to make the user 'logged out'
    return { type: LOGOUT };
}

export const fetchPortfolio = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    dispatch({ type: FETCH_PORTFOLIO, payload: user });
};

export const savePortfolio = () => async dispatch => {
    // const res = await axios.post('path'); // TODO: update path, check res and update payload
    return {
        type: SAVE_PORTFOLIO,
        payload: { name: 'tom', email: 'email@email.com' }
    };
    // dispatch({ type: FETCH_CODERS });
};

export const saveProject = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    // Link to myportfolio
    // dispatch({ type: SAVE_PROJECT });
};

// sync sample
export function fetchOOXX(city) {
    // const request = axios.get(url);
    // return {
    //     type: TYPE,
    //     payload: payload
    // };
}
