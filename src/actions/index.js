// import axios from 'axios';
import {
    LOGIN,
    LOGOUT,
    FETCH_CODERS,
    FETCH_PORTFOLIO,
    SAVE_PORTFOLIO,
    SAVE_PROJECT
} from './types';

export const fetchCoders = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    dispatch({
        type: FETCH_CODERS,
        payload: [
            {
                name: 'Lily',
                role: 'Python Developer',
                exp: '2 years experience'
            },
            {
                name: 'Tom',
                role: 'Java Developer',
                exp: '6 years experience'
            },
            {
                name: 'Jack',
                role: 'Web Developer',
                exp: '4 years experience'
            }
        ]
    });
};

export const login = user => async dispatch => {
    dispatch({ type: LOGIN, payload: user });
};

export const logout = () => {
    // set the user state to null in redux-store to make the user 'logged out'
    return { type: LOGOUT };
};

export const fetchPortfolio = () => async dispatch => {
    // const res = await axios.get('path'); // TODO: update path, check res and update payload
    dispatch({
        type: FETCH_PORTFOLIO,
        payload: {
            name: 'tom',
            email: 'tom@email.com',
            projects: [
                { projectName: 'theaks', projectDescription: 'Waaaaaagh!' },
                { projectName: 'elegan', projectDescription: 'No waaaaaagh!' },
                { projectName: 'beef', projectDescription: 'oh!' }
            ]
        }
    });
};

export const savePortfolio = () => async dispatch => {
    // const res = await axios.post('path'); // TODO: update path, check res and update payload
    // dispatch({ type: SAVE_PORTFOLIO });
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
