import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Stages.css";
import Banner from "../pics/banner.PNG";
import startingScreen from "../pics/startingScreen.mp4";

function Stages(){

    return(
        <div className="stages">
            <video autoPlay loop muted>
                <source src={startingScreen} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <img className="banner" src={Banner}/>
            <h2>COMING SOON...</h2>
            <Navbar/>
        </div>
    )
}

export default Stages;