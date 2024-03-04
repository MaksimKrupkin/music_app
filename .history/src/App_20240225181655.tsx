import React from 'react';
import './App.scss';
import MainPage_demo from './Pages/MainPage_demo/MainPage_demo';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import MainPage from './Pages/MainPage/MainPage';
import TrackList from './Pages/TrackList/TrackList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<MainPage_demo />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/tracklist" element={<TrackList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
