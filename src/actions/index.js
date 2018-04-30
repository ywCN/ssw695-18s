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
  SET_CURRENT_CODER_PORTFOLIO,
  SEARCH,
  FETCH_ALL_FOLLOWERS,
  UNFOLLOW,
  CLEAR_SEARCH
} from './types';

const apiUrl = 'http://34.203.190.77:8000'; // TODO: use https

export const fetchCoders = token => async dispatch => {
  const res = await axios.get(`${apiUrl}/server/users`, {
    headers: { Authorization: token }
  });

  const processedData = res.data.map(user => {
    return {
      // NOTE: BAD namings
      name: user.username,
      role: user.pk,
      exp: user.email,
      projects: [
        {
          projectName: `Project ID ${Math.floor(Math.random() * 100000)}`,
          projectDescription: `Build for Company ID ${Math.floor(
            Math.random() * 100000
          )}`
        },
        {
          projectName: `Project ID ${Math.floor(Math.random() * 100000)}`,
          projectDescription: `Build for Company ID ${Math.floor(
            Math.random() * 100000
          )}`
        },
        {
          projectName: `Project ID ${Math.floor(Math.random() * 100000)}`,
          projectDescription: `Build for Company ID ${Math.floor(
            Math.random() * 100000
          )}`
        }
      ]
    };
  });
  dispatch({
    type: FETCH_CODERS,
    payload: processedData
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
    username,
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
  try {
    await axios.post(url, data);
  } catch (e) {
    console.error(e);
  }

  dispatch({ type: SIGN_UP, payload: data });
  callback();
};

export const logout = removeCookie => dispatch => {
  removeCookie();
  dispatch({ type: LOGOUT });
  localStorage.clear();
};

export const fetchPortfolio = token => async dispatch => {
  const portfolioUrl = `${apiUrl}/platform/portfolio/`;
  const projectsUrl = `${apiUrl}/platform/project/`;
  const portfolio = await axios.get(portfolioUrl, {
    headers: { Authorization: token }
  });
  const projects = await axios.get(projectsUrl, {
    headers: { Authorization: token }
  });

  dispatch({
    type: FETCH_PORTFOLIO,
    payload: {
      name: 'tom',
      image: portfolio.data[0].image,
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

export const addContact = (from, to, token) => async dispatch => {
  const url = `${apiUrl}/platform/followers/`;
  await axios.post(
    url,
    { user_from: from, user_to: to },
    { headers: { Authorization: token } }
  );
  dispatch({ type: ADD_CONTACT });
  dispatch(fetchAllFollowers(token));
};

export const fetchAllFollowers = token => async dispatch => {
  const url = `${apiUrl}/platform/followers/`;
  const updated = await axios.get(url, { headers: { Authorization: token } });
  dispatch({ type: FETCH_ALL_FOLLOWERS, payload: updated.data });
};

export const setCurrentCoderPortfolio = coderPortfolio => {
  return {
    type: SET_CURRENT_CODER_PORTFOLIO,
    payload: coderPortfolio
  };
};

export const search = (keyword, token) => async dispatch => {
  const urlProjectProjectName = `${apiUrl}/platform/project/get_search_proj/?search_proj_name=${keyword}`;
  const urlProjectUsername = `${apiUrl}/platform/project/get_search_proj/?search_user_projs=${keyword}`;
  const urlUserUsername = `${apiUrl}/server/users/get_search_user/?search_user_name=${keyword}`;
  const urlUserEmail = `${apiUrl}/server/users/get_search_user/?search_email=${keyword}`;

  const ProjectProjectName = await axios.get(urlProjectProjectName, {
    headers: { Authorization: token }
  });
  const ProjectUsername = await axios.get(urlProjectUsername, {
    headers: { Authorization: token }
  });
  const UserUsername = await axios.get(urlUserUsername, {
    headers: { Authorization: token }
  });
  const UserEmail = await axios.get(urlUserEmail, {
    headers: { Authorization: token }
  });

  const data = {
    projects: [
      ...new Set([...ProjectProjectName.data, ...ProjectUsername.data])
    ],
    users: [...new Set([...UserUsername.data, ...UserEmail.data])]
  };

  dispatch({ type: SEARCH, payload: data });
};

export const unfollow = (from, to, token) => async dispatch => {
  const url = `${apiUrl}/platform/unfollow/${to}/${from}`;
  await axios.get(url, { headers: { Authorization: token } });
  dispatch({ type: UNFOLLOW });
  dispatch(fetchAllFollowers(token));
};

export const clearSearch = () => dispatch => {
  dispatch({ type: CLEAR_SEARCH, payload: {} });
};
