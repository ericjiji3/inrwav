import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Shop.css";
function Shop(){

    return(
        <div className="shop">
            <h2 className="jordon-header">JORDON</h2>
            <h2>SHOP</h2>
            <h2>COMING SOON...</h2>
            <Navbar/>
        </div>
    )
}

export default Shop;