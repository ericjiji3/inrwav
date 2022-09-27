import { render } from '@testing-library/react';
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MainMenu.css";
import Navbar from "../components/Navbar.js";
import ImageGallery from 'react-image-gallery';
import Pic1 from '../pics/photo-gallery/pic1.jpeg';
import Pic2 from '../pics/photo-gallery/pic2.jpeg';
import Pic3 from '../pics/photo-gallery/pic3.jpeg';
import Pic4 from '../pics/photo-gallery/pic4.jpeg';
import Pic5 from '../pics/photo-gallery/pic5.jpeg';
import Pic6 from '../pics/photo-gallery/pic6.png';
import Pic7 from '../pics/photo-gallery/pic7.jpeg';
import Podcast from '../pics/photo-gallery/podcast.jpeg';
import startingScreen from "../pics/startingScreen.mp4";

function MainMenu(){
    const images = [
        {
          original: Pic1,
          thumbnail: Pic1,
        },
        {
          original: Pic2,
          thumbnail: Pic2,
        },
        {
          original: Pic3,
          thumbnail: Pic3,
        },
        {
          original: Pic4,
          thumbnail: Pic4,
        },
        {
            original: Pic5,
            thumbnail: Pic5,
        },
        // {
        //     original: Pic6,
        //     thumbnail: Pic6,
        // },
        // {
        //     original: Pic7,
        //     thumbnail: Pic7,
        // },
      ];
      const videoRef = useRef();
      const setPlayBack = () => {
        videoRef.current.playbackRate = 0.6;
      };
      const handleCustomRightNavClick = (fn) => {
        console.log("next");
        fn();
        };
        const myRenderRightNav = (fn, disabled) => {
            return (
                <button
                type='button'
                className='image-gallery-right-nav'
                disabled={disabled}
                onClick={() => handleCustomRightNavClick(fn)}
                aria-label='Next Slide'
                />
                );
        };
    return(
        <div className="main-menu">
            <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={startingScreen} type="video/mp4"/>
            </video>
            <Navbar/>
            <h2 className="jordon-header">JORDON</h2>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} autoPlay={false}/>
            <div className="album">
                <div className="album-text">LATEST SOUNDS</div>
                <img className="album-pic" src={Pic6}/>
            </div>
            <iframe className = "featured-video" src="https://www.youtube.com/embed/vgjgmDccKyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            <div className="press">
                <div className='press-text'>
                    <h1>PRESS</h1>
                </div>
                <div className='press-figures'>
                    <figure>
                        <img src={Pic7}/>
                        <h5>PROFILE</h5>
                        <p>Learn more about the artist behind his music and his work on and off the stage</p>
                        <Link to="/profile" className="about">
                            <button className = "button">Read More</button>
                        </Link>
                    </figure>
                    <figure>
                        <img src={Podcast}/>
                        <h5>BEVO BEATS: HIP HOP ON THE 40 ACRES</h5>
                        <p>Listen to Jordon on this episode of Bevo Beats, focusing on the the disconnect between local hip hop scenes and the UT campus.</p>
                        <a href={'https://open.spotify.com/episode/5NOcX0vwjtsIWonBYa3d3a'} className = "about" style = {{textDecoration: "none"}}>
                            <button className = "button">Listen More</button>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="noise-filter"></div>
            
        </div>
    )
}

export default MainMenu;