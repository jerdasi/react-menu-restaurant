import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AdminPage from './components/Page/AdminPage';
import LoginPage from './components/Page/LoginPage';
import MainPage from './components/Page/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>

    </Router>

  );
}

export default App;
