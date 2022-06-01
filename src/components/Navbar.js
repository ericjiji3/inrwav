import React from 'react';
import styles from './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div className="navbar-container">
            <ul className="navbar">
                <li className="item">
                    <h2>HOME</h2>
                    <Link to="/mainMenu">HOME</Link>
                </li>
                <li className="item">
                    <h2>BROWSE</h2>
                    <Link to="/shop">BROWSE</Link>
                </li>
                <li className="item">
                    <h2>STAGES</h2>
                </li>
                <li className="item">
                    <h2>REACH</h2>
                </li>
                <li className="item">
                    <h2>PROFILE</h2>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
