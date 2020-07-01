import axios from 'axios';

const http = axios.create({
  timeout: 50 * 1e3,
  baseURL: '/cpdc/outBound',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8"
  }
})

export default http;