import React from 'react';
import './App.scss';
import MainPage_demo from './Pages/MainPage_demo/MainPage_demo';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import MainPage from './Pages/MainPage/MainPage';
import TrackList from './Pages/TrackList/TrackList';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import ArtistProfilePage from './Pages/ArtistProfilePage/ArtistProfilePage';
import AddTrack from './Components/AddTrack/AddTrack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainPage_demo />} />
          <Route path="/user" element={<MainPage />} />
          <Route path="/tracklist" element={<TrackList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userProfile" element={<UserProfilePage />} />
          <Route path="/artistProfile" element={<ArtistProfilePage />} />
        </Routes>
        {/* <AddTrack /> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
