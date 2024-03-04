import React from 'react';
import './App.scss';
import MainPage_demo from './Pages/MainPage_demo/MainPage_demo';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage_demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
