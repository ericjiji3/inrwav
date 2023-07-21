import React, {useRef} from 'react';
import Navbar from "../components/Navbar.js";
import "./Shop.css";
import rayTraceCompress from "../pics/raytraceCompress.mp4";
import chromelogo from "../pics/jordon-alva-chrome.png";


export default function Shop(props){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="shop">
            <video autoPlay loop muted playsInline ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTraceCompress} type="video/mp4"/>
            </video>
            <img className="jordon-header" alt="oops" src={chromelogo}/>
            <h2>SHOP</h2>
            <h2>COMING SOON...</h2>
            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

