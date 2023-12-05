import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: "http://swish-landing-page-dev-2035960663.us-east-2.elb.amazonaws.com",
  timeout: 30 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});


