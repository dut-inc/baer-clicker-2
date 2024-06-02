import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './pages/App';
import { Login, Register } from './pages/Login'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path="login" element={<Login/>} />
    <Route path="register" element={<Register/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
