import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gregarious-dodol-d3655c.netlify.app/api',
  // baseURL: 'http://localhost:3000/api',
});
