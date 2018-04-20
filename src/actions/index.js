import axios from 'axios';
import {
  LOGIN,
  SIGN_UP,
  LOGOUT,
  FETCH_CODERS,
  FETCH_PORTFOLIO,
  SAVE_PORTFOLIO,
  SAVE_PROJECT,
  SET_EDITTING_PROJECT,
  ADD_CONTACT,
  SET_CURRENT_CODER_PORTFOLIO
} from './types';

const apiUrl = 'http://34.203.190.77:8000'; // TODO: use https

export const fetchCoders = () => async dispatch => {
  // const res = await axios.get('path'); // TODO: update path, check res and update payload
  dispatch({
    type: FETCH_CODERS,
    payload: [
      {
        name: 'Lily',
        role: 'Python Developer',
        exp: '2 years experience',
        projects: [
          {
            projectName: 'asdasadfasfasda',
            projectDescription: 'asdffdasdfsdasd!'
          },
          {
            projectName: 'eledasdasdgan',
            projectDescription: 'No waaaaaagh!'
          },
          {
            projectName: 'adahjgfhdgfgnhmgfnxbvdzsd',
            projectDescription: 'asdasdfasdfsadfadsa!'
          }
        ]
      },
      {
        name: 'Tom',
        role: 'Java Developer',
        exp: '6 years experience',
        projects: [
          {
            projectName: 'asdasdadasdasd',
            projectDescription: 'assdadasdasddasd!'
          },
          {
            projectName: 'eledasddasdasdaasdgan',
            projectDescription: 'No waaaadadasdaaagh!'
          },
          {
            projectName: 'adadasdasdasdsd',
            projectDescription: 'asddadasdadsa!'
          }
        ]
      },
      {
        name: 'Jack',
        role: 'Beef Developer',
        exp: '4 years experience',
        projects: [
          {
            projectName: 'asgdgsdgfdsdasda',
            projectDescription: 'aadasdasdsdasd!'
          },
          {
            projectName: 'eledasgdfgsdfgdasdgan',
            projectDescription: 'No wadadasdaaaaagh!'
          },
          {
            projectName: 'agsdfgsdasd',
            projectDescription: 'asdasfsdgafadsa!'
          }
        ]
      }
    ]
  });
};

export const login = (
  username,
  password,
  redirect,
  setCookie
) => async dispatch => {
  const url = `${apiUrl}/rest-auth/login/`;
  const data = {
    username, // note, it is user name now, not email
    password
  };
  try {
    const res = await axios.post(url, data);
    const user = res.data;
    setCookie(user.token);
    dispatch({ type: LOGIN, payload: user });
    redirect();
  } catch (e) {
    console.error(e);
  }
  console.log('called');
};

export const loginSuccess = (user, redirect, setCookie) => async dispatch => {
  setCookie();
  dispatch({ type: LOGIN, payload: user });
  redirect();
};

export const signUp = (
  username,
  email,
  password1,
  password2,
  callback
) => async dispatch => {
  const url = `${apiUrl}/rest-auth/registration/`;
  const data = {
    username,
    email,
    password1,
    password2
  };
  console.log(data);
  try {
    const res = await axios.post(url, data);
    console.log(res);
  } catch (e) {
    console.error(e);
  }

  dispatch({ type: SIGN_UP, payload: data });
  callback();
};

export const logout = removeCookie => dispatch => {
  removeCookie();
  dispatch({ type: LOGOUT });
};

export const fetchPortfolio = token => async dispatch => {
  const portfolioUrl = `${apiUrl}/platform/portfolio/`;
  const projectsUrl = `${apiUrl}/platform/project/`;
  // const portfolio = await axios.get(portfolioUrl, {
  //   headers: { Authorization: token }
  // }); // use later
  const projects = await axios.get(projectsUrl, {
    headers: { Authorization: token }
  });
  // console.log('portfolio is', portfolio.data, '\nprojects are', projects.data);

  dispatch({
    type: FETCH_PORTFOLIO,
    payload: {
      name: 'tom',
      image: 'image link',
      email: 'test@test.com',
      projects: projects.data
    }
  });
};

export const savePortfolio = () => async dispatch => {
  // const res = await axios.post('path', obj); // TODO: update path, check res and update payload
  dispatch({ type: SAVE_PORTFOLIO });
};

export const saveProject = (data, token) => async dispatch => {
  const url = `${apiUrl}/platform/project_write/`;
  await axios.post(url, data, { headers: { Authorization: token } });
  dispatch({ type: SAVE_PROJECT });
};

export const setEdittingProject = projectName => {
  return {
    type: SET_EDITTING_PROJECT,
    payload: projectName
  };
};

export const addContact = coderID => async dispatch => {
  console.log('addContact action called');

  dispatch({ type: ADD_CONTACT });
};

export const setCurrentCoderPortfolio = coderPortfolio => {
  console.log('setCurrentCoderPortfolio action called');
  return {
    type: SET_CURRENT_CODER_PORTFOLIO,
    payload: coderPortfolio
  };
};
