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
                <a className = "link spotify" href = "https://open.spotify.com/album/1lw5aOFuo6DEj6QkyO8gKJ">
                    <FontAwesomeIcon icon={faSpotify} size = "3x"/>
                </a>
                <a className = "link apple" href = "https://music.apple.com/us/album/naive/1695744610">
                <FontAwesomeIcon icon={faApple} size = "3x"/>
                </a>
                <a className = "link youtube" href = "https://www.youtube.com/channel/UCSO0_aUhJ-nIfZtXJoWAQgg">
                <FontAwesomeIcon icon={faYoutube} size = "3x"/>
                </a>
            </div>
        </div>
    )
}

export default Sounds;
