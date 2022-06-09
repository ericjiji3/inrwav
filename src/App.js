import logo from "./pics/inrwav-logo.png";
import MainMenu from './pages/MainMenu.js';
import Navbar from './components/Navbar.js';
import './App.css';
import { Link } from "react-router-dom";
import startingScreen from "./pics/startingScreen.mp4";
import stars from "./pics/stars.gif";
import clickToContinue from "./pics/clickToContinue.mp4";
import hello from "./pics/hello.mp4";
import React, {Component,useState, useEffect, useRef} from 'react';


function App(){
  const [reveal, setReveal] = useState(false);
  const [shatter, setShatter] = useState(false);
  const revealRef = useRef(reveal);
  revealRef.current = reveal;

  useEffect(() => {
    function clickedFunction(){
      setShatter(true);
      setReveal(false);
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
      <div className="starting-screen ">
        
        <div className="video-container">
        <video autoPlay loop muted>
          <source src={startingScreen} type="video/mp4"/>
        </video>
        </div>
        <div className="logo-description">
          <img className="logo" src={logo} alt="oops!"/>
          <h2 className={reveal ? 'show':'hide'}>Press to Continue</h2>
          
        </div>
        <div className="noise-filter"></div>
      </div>
      {/* <MainMenu/> */}
    </div>
  );
}

export default App;
