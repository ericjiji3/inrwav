
import React from 'react';
import Navbar from "../components/Navbar.js";
import trailer from "../pics/trailer.MOV";
import styles from "./Videos.css";

function Videos(){

    return(
        <div className="videos">
            <h2 className="jordon-header">JORDON</h2>
            <div className="videos-container">
                <iframe className = "asiam" src="https://www.youtube.com/embed/vgjgmDccKyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <iframe className = "paint" src="https://www.youtube.com/embed/zxA9LQOj2_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <iframe className = "coffee" src="https://www.youtube.com/embed/jajJPlCs2nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                <video className = "trailer" controls>
                    <source src={trailer}>
                    </source>
                </video>
            </div>
            
            <Navbar/>
        </div>
    )
}

export default Videos;