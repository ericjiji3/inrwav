import React from 'react';
import styles from './Navbar.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Sounds from '../components/Sounds.js';
import Contact from '../components/Contact.js';

Modal.setAppElement('#root');

const customSoundsStyles = {
    content: {
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
        width: '20%',
        height: 'fit-content',
        margin: 'auto'
    },
  };
const customReachStyles = {
content: {
//   top: '50%',
//   left: '50%',
//   right: 'auto',
//   bottom: 'auto',
//   marginRight: '-50%',
//   transform: 'translate(-50%, -50%)',
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
                <h2 className="sounds" onClick={() => setIsSoundsOpen(true)}>SOUNDS</h2>
                <Modal
                    isOpen={soundsModalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={() => setIsSoundsOpen(false)}
                    style={customSoundsStyles}
                    contentLabel="Example Modal"
                >
                    <Sounds/>
                </Modal>

                    
                </li>
                <li className="item">
                    <Link to="/videos"><h2>VISUALS</h2></Link>
                </li>
                <li className="item">
                    <Link to="/shop"><h2>BROWSE</h2></Link>
                </li>
                <li className="item">
                    <h2 onClick={() => setIsReachOpen(true)}>REACH</h2>
                    <Modal
                    isOpen={reachModalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={() => setIsReachOpen(false)}
                    style={customReachStyles}
                    contentLabel="Example Modal"
                    className="reach-modal"
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
