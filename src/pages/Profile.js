import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Profile.css";

function Profile(){

    return(
        <div className="profile">
            <h2 className="jordon-header">JORDON</h2>
            <h2>PROFILE</h2>
            <Navbar/>
        </div>
    )
}

export default Profile;