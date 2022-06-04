import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";
import styles from "./Profile.css";
import Pic1 from '../pics/photo-gallery/pic1.jpeg';

function Profile(){

    return(
        <div className="profile">
            <h2 className="jordon-header">JORDON</h2>
            <Navbar/>
            <div className="profile-container">
                <div className="pic">
                    <img src={Pic1}/>
                </div>
                <div className = "text">
                <span>
                    For Jordon, music is more than a collection of notes, it's an experience. As a child, Jordon’s love for music began in car rides with his father. Whether it was R&B/Soul icons Marvin Gaye and Sade or rock moguls Fleetwood Mac and Pink Floyd, Jordon was beginning to develop a colorful palette that would influence his musical creations. As an adolescent, artists Drake, Kid Cudi, and J. Cole helped to propel Jordon’s interest in Hip-Hop. Writing raps on notebook paper in the back of the bus, a thirteen year old Jordon's love deepened as he rediscovered music as an expression of himself. Everyday after soccer practice, Jordon could be found learning the art of production as he experimented with recording setups and music. At eighteen, Jordon had already gained a strong affinity for performing his music live. Showcasing his talents in multiple cities across Texas, his stage presence cultivated him a small but loyal following. Now Jordon's passion continues to grow with each project he creates. Jordon, reigning from Houston, Texas, dropped his new EP CHROMA on June 4th, 2021.
                </span>
                <button>LISTEN NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;