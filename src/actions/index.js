import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    LOGIN,
    LOGOUT,
    FETCH_CODERS,
    FETCH_PORTFOLIO,
    SAVE_PORTFOLIO
} from './types';

export const fetchCoders = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_CODERS, payload: res.data });
};

export const userLogin = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: check login status
    // Link to dashboard
    // dispatch({ type: LOGIN, payload: true });
};

export const userLogout = () => async dispatch => {
    // await logout();
    // Link to logout
    // dispatch({ type: LOGOUT, payload: false });
};

export const fetchUserPortfolio = () => async dispatch => {
    // const res = await axios.get('/api/current_user'); // TODO: update path, check res and update payload
    // dispatch({ type: FETCH_PORTFOLIO, payload: res.data });
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
