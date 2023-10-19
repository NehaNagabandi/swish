import { Cookies } from 'react-cookie-consent';
import axios from 'axios';
// const dotenv = require('dotenv')
// console.log("env",process.env.REACT_APP_NX_API_BASE_URL)
export const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30 * 60 * 1000,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token
  let currentUser;

  
    currentUser = await JSON.parse(
      localStorage.getItem('user_customer_swish')
    );

  config.headers.TimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  config.headers.Cookies = Cookies.get('__opix_uid');
  if (currentUser && currentUser.id_token) {
    const token = currentUser.id_token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && (response.data || response.data === 0)) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response?.data?.statusCode === 401) {
    }
    if (error?.toJSON()?.message === 'Network Error') {
      // throw {
      //   data: {
      //     error: error.toJSON().message,
      //   }
      // };
    }
     else {
      throw error.response.data;
    }
  }
);
