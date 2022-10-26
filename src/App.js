import logo from "./pics/inrwav-logo.png";
import MainMenu from './pages/MainMenu.js';
import Navbar from './components/Navbar.js';
import './App.css';
import { Link } from "react-router-dom";
import startingScreen from "./pics/startingScreen.mp4";
import startingScreenCompress from "./pics/startCompress.mp4";
import starsCompress from "./pics/StarsComp.mp4";
import React, {Component,useState, useEffect, useRef} from 'react';


function App(){
  const [reveal, setReveal] = useState(false);
  const [shatter, setShatter] = useState(false);
  const [menu, setMenu] = useState(false);
  const revealRef = useRef(reveal);
  revealRef.current = reveal;

  useEffect(() => {
    function clickedFunction(){
      setShatter(true);
      setReveal(false);
      setTimeout(() => {
        setMenu(true);
      }, 3000)
    }
    setTimeout(() => {
      setReveal(true); // count is 0 here
    }, 3000);
    setTimeout(() =>{
      document.addEventListener('click', clickedFunction)
  }, 4500)
  }, []);

    
  return (

    
    <div className="App">
      <div className={menu ? "starting-screen hidden" : "starting-screen"}>
        
        <div className="video-container">
        <video autoPlay loop muted>
          <source src={starsCompress} type="video/mp4"/>
        </video>
        </div>
        <div className="logo-description">
          <div>
          <img className={shatter ? "logo-11" : "logo"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-21" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-31" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-41" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-51" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-12" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-22" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-32" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-42" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-52" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-13" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-23" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-33" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-43" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-53" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-14" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-24" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-34" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-44" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-54" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-15" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-25" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-35" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-45" : "logo-hide"} src={logo} alt="oops!"/>
          <img className={shatter ? "logo-55" : "logo-hide"} src={logo} alt="oops!"/>
          </div>
          <h2 className={reveal ? 'show':'hide'}>Press to Continue</h2>
          
        </div>
        <div className={shatter ? "noise-filter backdrop" : "noise-filter"}></div>
      </div>
      <div className={menu ? "menu" : "menu hide"}>
        <MainMenu/>
      </div>
      <div className="mm-noise-filter"></div>
    </div>
  );
}

export default App;
