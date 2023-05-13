import React, {useRef} from 'react';
import Navbar from "../components/Navbar.js";
import Banner from "../pics/banner.PNG";
import './Stages.css';
import rayTraceCompress from "../pics/raytraceCompress.mp4";
import chromelogo from "../pics/jordon-alva-chrome.png";

function Stages(){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="stages">
            <video autoPlay loop muted playsInline ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTraceCompress} type="video/mp4"/>
            </video>
            <img className="jordon-header" alt="oops" src={chromelogo}/>
            <img className="banner" alt="shows" src={Banner}/>
            <h2>COMING SOON...</h2>
            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

export default Stages;