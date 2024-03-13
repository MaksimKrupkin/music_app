import axios from 'axios';

const ADD_TRACK_URL = 'http://localhost:5238/tracks';
const userString = localStorage.getItem('user');
let token = null;

if (userString) {
  const user = JSON.parse(userString);
  token = user.token;
}

const addTrack = axios.create({
  baseURL: ADD_TRACK_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});
