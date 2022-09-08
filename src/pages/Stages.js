import { render } from '@testing-library/react';
import React, {useEffect, useRef} from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Stages.css";
import Banner from "../pics/banner.PNG";
import startingScreen from "../pics/startingScreen.mp4";

function Stages(){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="stages">
            <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={startingScreen} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <img className="banner" src={Banner}/>
            <h2>COMING SOON...</h2>
            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

export default Stages;