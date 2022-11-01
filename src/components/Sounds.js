import React from 'react';
import './Sounds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSpotify,
    faApple,
    faItunesNote,
    faAmazon,
    faYoutube,
    faDeezer
  } from "@fortawesome/free-brands-svg-icons";

function Sounds(){

    return(
        <div className="sounds">
            <h2>LISTEN ON:</h2>
            <div className="social-container">
                <a className = "link spotify" href = "https://open.spotify.com/album/2fjpmy9hTMQdm7z5AIjfH1?si=kulDq64HSBGRGEx5lq281w&nd=1">
                    <FontAwesomeIcon icon={faSpotify} size = "3x"/>
                    <h3>SPOTIFY</h3>
                </a>
                <a className = "link apple" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
                <FontAwesomeIcon icon={faApple} size = "3x"/>
                <h3>APPLE</h3>
                </a>
                <a className = "link tidal" href = "https://tidal.com/browse/album/183073999">
                <FontAwesomeIcon icon={faDeezer} size = "3x"/>
                <h3>TIDAL</h3>
                </a>
                <a className = "link itunes" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
                <FontAwesomeIcon icon={faItunesNote} size = "3x"/>
                <h3>ITUNES</h3>
                </a>
                <a className = "link amazon" href = "https://music.amazon.com/albums/B0947DVT1M?marketplaceId=ATVPDKIKX0DER&tag=smarturl-pivot-20&musicTerritory=US&">
                <FontAwesomeIcon icon={faAmazon} size = "3x"/>
                <h3>AMAZON</h3>
                </a>
                <a className = "link youtube" href = "https://open.spotify.com/artist/6dZMYil8Wj3zvMFS5hoA8U">
                <FontAwesomeIcon icon={faYoutube} size = "3x"/>
                <h3>YOUTUBE MUSIC</h3>
                </a>
            </div>
        </div>
    )
}

export default Sounds;
