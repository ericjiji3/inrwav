import React from 'react';
import './Sounds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSpotify,
    faApple,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";

function Sounds(){

    return(
        <div className="sounds">
            <h2>LISTEN ON:</h2>
            <div className="social-container">
                <a className = "link spotify" href = "https://open.spotify.com/album/2Pf8pc75xx8qTnHLPUWGeE?si=-TUdJVSkReq_vhz4zl9MTw">
                    <FontAwesomeIcon icon={faSpotify} size = "3x"/>
                </a>
                <a className = "link apple" href = "https://music.apple.com/us/album/in-a-rush-ep/1896357636">
                <FontAwesomeIcon icon={faApple} size = "3x"/>
                </a>
                <a className = "link youtube" href = "https://www.youtube.com/playlist?list=OLAK5uy_lhLziU3tnCFyekffSI3P6SRbbdx_lA6YM">
                <FontAwesomeIcon icon={faYoutube} size = "3x"/>
                </a>
            </div>
        </div>
    )
}

export default Sounds;
