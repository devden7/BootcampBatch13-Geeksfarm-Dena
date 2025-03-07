import axios from 'axios';

export const instanceContact = axios.create({
  baseURL: 'http://localhost:3001',
});
