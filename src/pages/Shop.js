import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Shop.css";
import startingScreen from "../pics/startingScreen.mp4";

function Shop(){

    return(
        <div className="shop">
            <video autoPlay loop muted>
                <source src={startingScreen} type="video/mp4"/>
            </video>
            <h2 className="jordon-header">JORDON</h2>
            <h2>SHOP</h2>
            <h2>COMING SOON...</h2>
            <Navbar/>
        </div>
    )
}

export default Shop;