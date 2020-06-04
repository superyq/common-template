import axios from 'axios';

const http = axios.create({
  timeout: 5 * 1e3,
  baseURL: process.env.VUE_APP_API_PREFIX || '',
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8"
  }
})

export default http;