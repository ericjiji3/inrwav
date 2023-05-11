import React, {useRef} from 'react';
import Navbar from "../components/Navbar.js";
import rayTraceCompress from "../pics/raytraceCompress.mp4";
import './Videos.css';

function Videos(){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="videos">
            <video autoPlay loop muted playsInline ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTraceCompress} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <div className="videos-container">
                <div className='video-text'>
                    <h3>JUNE 2022</h3>
                    <div className="separator"></div>
                    <iframe className = "for-the-ride" src="https://www.youtube.com/embed/a6_N8gNGPPQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <div className='video-text'>
                    <h3>SEPTEMBER 2021</h3>
                    <div className="separator"></div>
                    <iframe className = "asiam" src="https://www.youtube.com/embed/vgjgmDccKyk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <div className='video-text'>
                    <h3>JUNE 2021</h3>
                    <div className="separator"></div>
                    <iframe className = "paint" src="https://www.youtube.com/embed/zxA9LQOj2_k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <div className='video-text'>
                    <h3>APRIL 2020</h3>
                    <div className="separator"></div>
                    <iframe className = "coffee" src="https://www.youtube.com/embed/jajJPlCs2nY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
            </div>

            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

export default Videos;