import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    USER_LOGIN,
    USER_LOGOUT,
    FETCH_CODERS,
    FETCH_USER_PORTFOLIO,
    SAVE_USER_PORTFOLIO
} from './types';

export const fetchCoders = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_CODERS, payload: res.data });
};

export const userLogin = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: check login status
    // Link to dashboard
    // dispatch({ type: USER_LOGIN, payload: true });
};

export const userLogout = () => async dispatch => {
    // await logout();
    // Link to logout
    // dispatch({ type: USER_LOGOUT, payload: false });
};

export const fetchUserPortfolio = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_USER_PORTFOLIO, payload: res.data });
};

export const saveUserPortfolio = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: update path, check res and update payload
    // Link to myportfolio
    // dispatch({ type: FETCH_CODERS, payload: res.data });
};

// sync sample
export function fetchOOXX(city) {
    // const request = axios.get(url);
    // return {
    //     type: TYPE,
    //     payload: payload
    // };
}
