import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Stages.css";

function Stages(){

    return(
        <div className="stages">
            <h2 className="jordon-header">JORDON</h2>
            <h2>STAGES</h2>
            <Navbar/>
        </div>
    )
}

export default Stages;