import React, {useEffect, useState} from 'react';
import MainMenu from './MainMenu';

function StartingScreen(props){
    var keyPressed = props.keyPressed;
    function handleKeyPress(e){
        keyPressed = true;
        console.log(e);
        console.log(keyPressed);
    }

    document.addEventListener("keypress", handleKeyPress);
    
    return(
        
        <div className="starting-screen">
            <h3>INRWAV</h3>
            <h4>Press to Continue</h4>
        </div>
    )
}

export default StartingScreen;