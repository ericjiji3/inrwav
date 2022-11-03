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
                <a className = "link spotify" href = "https://open.spotify.com/album/2fjpmy9hTMQdm7z5AIjfH1?si=kulDq64HSBGRGEx5lq281w&nd=1">
                    <FontAwesomeIcon icon={faSpotify} size = "3x"/>
                </a>
                <a className = "link apple" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
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
