const ADD_TRACK_URL = 'http://localhost:5238/tracks';
const userDataString = localStorage.getItem('userData');
const token = userData.token;

const addTrack = axios.create({
  baseURL: ADD_TRACK_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

addTrack.interceptors.request.use;
