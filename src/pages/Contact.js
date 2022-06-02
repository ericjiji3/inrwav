import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Contact.css";

function Contact(){

    return(
        <div className="contact">
            <h2 className="jordon-header">JORDON</h2>
            <h2>CONTACT</h2>
            <Navbar/>
        </div>
    )
}

export default Contact;