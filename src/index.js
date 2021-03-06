import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import './index.css';
import StartingScreen from './pages/StartingScreen.js';
import App from './App';
import MainMenu from "./pages/MainMenu.js";
import Shop from "./pages/Shop.js";
import Stages from "./pages/Stages.js";
import Profile from "./pages/Profile.js";
import Videos from "./pages/Videos.js";
// import MainMenu from "./pages/MainMenu.js";
// import MainMenu from "./pages/MainMenu.js";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<MainMenu />} />
      <Route path="shop" element={<Shop />} />
      <Route path="stages" element={<Stages />} />
      <Route path="profile" element={<Profile />} />
      <Route path="videos" element={<Videos />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
