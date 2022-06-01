import { render } from '@testing-library/react';
import React from 'react';
import styles from "./MainMenu.css";
import Navbar from "../components/Navbar.js";

function MainMenu(){

    return(
        <div className="main-menu">
            <h2>HOME</h2>
            <Navbar/>
        </div>
    )
}

export default MainMenu;