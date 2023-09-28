import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Sounds from '../components/Sounds.js';
import Contact from '../components/Contact.js';

Modal.setAppElement('#root');

const customSoundsStyles = {
    content: {
        width: '20%',
        height: 'fit-content',
        margin: 'auto'
    },
  };
const customReachStyles = {
content: {
    position: 'absolute',
    inset: '40px',
    border: '1px solid rgb(204, 204, 204)',
    background: 'rgb(255, 255, 255)',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    width: '20%',
    height: 'fit-content',
    margin: 'auto'
},
};

function Navbar(){
    const [soundsModalIsOpen, setIsSoundsOpen] = React.useState(false);
    const [reachModalIsOpen, setIsReachOpen] = React.useState(false);

    function openSoundModal(e) {
        e.preventDefault();
        setIsSoundsOpen(true);
    }
    function closeSoundModal(e){
        e.preventDefault();
        setIsSoundsOpen(false);
    }
    function openReachModal(e){
        e.preventDefault();
        setIsReachOpen(true);
    }
    function closeReachModal(e){
        e.preventDefault();
        setIsReachOpen(false);
    }

    return(
        <div className="navbar-container">
            <ul className="navbar">

                <li className="item">
                    <Link to="/home"><h2>HOME</h2></Link>
                </li>
                <li className="item">
                
                <h2 className="sounds" onClick={openSoundModal}>SOUNDS</h2>
                <Modal
                    isOpen={soundsModalIsOpen}
                    onRequestClose={closeSoundModal}
                    style={customSoundsStyles}
                    contentLabel="Example Modal"
                    className={soundsModalIsOpen ? "sound-modal" : "sound-modal closing"}
                    closeTimeoutMS={1000}
                >
                    <Sounds/>
                </Modal>

                    
                </li>
                <li className="item">
                    <Link to="/videos"><h2>VISUALS</h2></Link>
                </li>
                {/* <li className="item">
                    <a href="https://jordonalva.myshopify.com/"><h2>SHOP</h2></a>
                </li> */}
                <li className="item">
                    <h2 onClick={openReachModal}>REACH</h2>
                    <Modal
                    isOpen={reachModalIsOpen}
                    onRequestClose={closeReachModal}
                    style={customReachStyles}
                    contentLabel="Example Modal"
                    className={reachModalIsOpen ? "reach-modal" : "reach-modal closing"}
                    closeTimeoutMS={1000}
                >
                    <Contact/>
                </Modal>
                </li>
                <li className="item">
                    <Link to="/stages"><h2>STAGES</h2></Link>
                </li>
                <li className="item">
                    <Link to="/profile"><h2>PROFILE</h2></Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar;
