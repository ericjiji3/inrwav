import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Stages.css";
import Banner from "../pics/banner.PNG";

function Stages(){

    return(
        <div className="stages">
            <h2 className="jordon-header">JORDON</h2>
            <img className="banner" src={Banner}/>
            <h2>COMING SOON...</h2>
            <Navbar/>
        </div>
    )
}

export default Stages;