import React from 'react';
import styles from './Navbar.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Navbar(){
    const [soundsModalIsOpen, setIsSoundsOpen] = React.useState(false);
    const [reachModalIsOpen, setIsReachOpen] = React.useState(false);

    function openModal(e) {
        
        if(e.target.className == 'sounds'){
            setIsSoundsOpen(true);
        }else{
            setIsReachOpen(true);
        }
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal(e) {
          console.log(e.target.className);
        if(e.target.className == 'sounds'){
            setIsSoundsOpen(false);
        }else{
            setIsReachOpen(false);
        }
      }

    return(
        <div className="navbar-container">
            <ul className="navbar">
                <li className="item">
                    <Link to="/"><h2>HOME</h2></Link>
                </li>
                <li className="item">
                <h2 className="sounds" onClick={openModal}>SOUNDS</h2>
                <Modal
                    isOpen={soundsModalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={}
                    contentLabel="Example Modal"
                >
                    <h2>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                </Modal>

                    
                </li>
                <li className="item">
                    <Link to="/videos"><h2>VISUALS</h2></Link>
                </li>
                <li className="item">
                    <Link to="/shop"><h2>BROWSE</h2></Link>
                </li>
                <li className="item">
                    <h2 onClick={openModal}>REACH</h2>
                    <Modal
                    isOpen={reachModalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={}
                    contentLabel="Example Modal"
                >
                    <h2>Hello2</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
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
