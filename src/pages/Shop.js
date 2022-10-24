import { render } from '@testing-library/react';
import React, {useEffect, useRef} from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Shop.css";
import rayTrace from "../pics/raytrace.mp4";

function Shop(){
    const videoRef = useRef();
    const setPlayBack = () => {
    videoRef.current.playbackRate = 0.6;
    };
    return(
        <div className="shop">
            <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTrace} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <h2>SHOP</h2>
            <h2>COMING SOON...</h2>
            <Navbar/>
            <div className="noise-filter"></div>
        </div>
    )
}

export default Shop;