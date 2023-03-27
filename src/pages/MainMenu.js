import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './MainMenu.css';
import Navbar from "../components/Navbar.js";
import ImageGallery from 'react-image-gallery';
import Pic1 from '../pics/photo-gallery/pic1.jpg';
import Pic2 from '../pics/photo-gallery/pic2.jpg';
import Pic3 from '../pics/photo-gallery/pic3.jpg';
import Pic4 from '../pics/photo-gallery/pic4.jpg';
import Pic5 from '../pics/photo-gallery/pic5.jpg';
import Pic7 from '../pics/photo-gallery/pic7.jpeg';
import Podcast from '../pics/photo-gallery/podcast.jpeg';
import rayTraceCompress from "../pics/raytraceCompress.mp4";
import FeaturedAlbum from "../pics/photo-gallery/all-is-well.PNG";

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
      ];
      const videoRef = useRef();
      const setPlayBack = () => {
        videoRef.current.playbackRate = 0.6;
      };
    return(
        <div className="main-menu">
            <video autoPlay loop muted playsInline ref={videoRef} onCanPlay={() => setPlayBack()}>
                <source src={rayTraceCompress} type="video/mp4"/>
            </video>
            <Navbar/>
            <h2 className="jordon-header">JORDON</h2>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} autoPlay={false}/>
            {/* <img className="featured-pic" alt="feature-pic" src={Pic4}/> */}
            <a className="link-album" href="https://hypeddit.com/jordon/alliswell">
                <div className="album">
                    <div className="album-text">LATEST SOUNDS</div>
                    <img className="album-pic" alt="Latest Album" src={FeaturedAlbum}/>
                </div>
            </a>
            
            <iframe className = "featured-video" src="https://www.youtube.com/embed/a6_N8gNGPPQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
            <div className="press">
                <div className='press-text'>
                    <h1>PRESS</h1>
                </div>
                <div className='press-figures'>
                    
                    <figure>
                        <Link to="/profile" className="about">
                        <img src={Pic7} alt="Profile"/>
                        <div className='overlay'>
                            <h5>PROFILE</h5>
                            <p>Learn more about the artist behind his music and his work on and off the stage</p>
                            {/* <Link to="/profile" className="about">
                                <button className = "button">Read More</button>
                            </Link> */}
                        </div>
                        </Link>
                    </figure>
                    
                    <figure>
                        <a href={'https://open.spotify.com/episode/5NOcX0vwjtsIWonBYa3d3a'} className = "about" style = {{textDecoration: "none"}}>
                        <img src={Podcast} alt="Podcast"/>
                        <div className='overlay'>
                            <h5>BEVO BEATS: HIP HOP ON THE 40 ACRES</h5>
                            <p>Listen to Jordon on this episode of Bevo Beats, focusing on the the disconnect between local hip hop scenes and the UT campus.</p>
                        </div>
                        </a>
                    </figure>
                </div>
            </div>
            <div className="noise-filter"></div>
            
        </div>
    )
}

export default MainMenu;