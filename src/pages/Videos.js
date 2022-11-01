import React, {useRef} from 'react';
import Navbar from "../components/Navbar.js";
import rayTrace from "../pics/raytrace.mp4";
import './Videos.css';

function Videos(){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="videos">
            <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTrace} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <div className="videos-container">
                <iframe className = "asiam" src="https://www.youtube.com/embed/vgjgmDccKyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <iframe className = "paint" src="https://www.youtube.com/embed/zxA9LQOj2_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <iframe className = "coffee" src="https://www.youtube.com/embed/jajJPlCs2nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <iframe className = "for-the-ride" src="https://www.youtube.com/embed/a6_N8gNGPPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
            
            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

export default Videos;