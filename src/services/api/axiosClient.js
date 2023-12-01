import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: "http://swish-be-dev-lb-1683661170.us-east-2.elb.amazonaws.com",
  timeout: 30 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});


