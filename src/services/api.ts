// in src/services/api.ts
import axios from 'axios';

// Create a configured instance of Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Your Laravel API's base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// This is an interceptor. It runs before every single request is sent.
// Its job is to check for an auth token in local storage and add it to the request header.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // If the token exists, add the 'Authorization: Bearer <token>' header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // If an error occurs before the request is sent, reject the promise
    return Promise.reject(error);
  }
);

export default api;