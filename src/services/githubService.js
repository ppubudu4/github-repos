import axios from 'axios';
import { axiosGetCanclelable } from '../helpers/axios.helper';

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

const isServer = () => {
  return typeof window === 'undefined';
};

const searchRepos = (serchText, language) => {
  const qurey = language ? `${serchText}+language:${language}` : serchText;

  if (isServer()) {
    return axios.get(
      `search/repositories?q=${qurey}&sort=stars&order=desc`,
      axiosConfig
    );
  }

  return axiosGetCanclelable(`api/search?q=${qurey}&sort=stars&order=desc`);
};

const getRepo = (id) => {
  return axios.get(`repositories/${id}`, axiosConfig);
};

const getProfile = (username) => {
  return axios.get(`users/${username}`, axiosConfig);
};

export { searchRepos, getRepo, getProfile };
