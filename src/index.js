import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import MainMenu from "./pages/MainMenu.js";
import Shop from "./pages/Shop.js";
// import MainMenu from "./pages/MainMenu.js";
// import MainMenu from "./pages/MainMenu.js";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="shop" element={<Shop />} />
      <Route path="mainMenu" element={<MainMenu />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
