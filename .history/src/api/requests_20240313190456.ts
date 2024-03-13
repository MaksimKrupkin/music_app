import axios from 'axios';
const ADD_TRACK_URL = 'http://localhost:5238/tracks';
const userData = localStorage.getItem('user');
const token = userData.token;

const addTrack = axios.create({
  baseURL: ADD_TRACK_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

addTrack.interceptors.request.use;
