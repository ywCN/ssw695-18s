// import axios from 'axios';
import {
    LOGIN,
    LOGOUT,
    FETCH_CODERS,
    FETCH_PORTFOLIO,
    SAVE_PORTFOLIO,
    SAVE_PROJECT,
    SET_EDITTING_PROJECT
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
                role: 'Hungray Developer',
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
    // const res = await axios.post('path', obj); // TODO: update path, check res and update payload
    dispatch({ type: SAVE_PORTFOLIO });
};

export const saveProject = () => async dispatch => {
    // const res = await axios.post('path', obj); // TODO: update path, check res and update payload
    dispatch({ type: SAVE_PROJECT });
};

// sync sample
export const fetchOOXX = city => {
    // return {
    //     type: TYPE,
    //     payload: payload
    // };
};

export const setEdittingProject = projectName => {
    return {
        type: SET_EDITTING_PROJECT,
        payload: projectName
    };
};
