import axios from 'axios';
import { baseApiUrl } from './index';

const token = new URLSearchParams(window.location.search).get('token') || "";

const instance = axios.create({
  baseURL: baseApiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  timeout: 5000
});

export default instance;
