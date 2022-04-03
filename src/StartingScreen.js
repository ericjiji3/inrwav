import React, {Component, useEffect} from 'react';
import MainMenu from './MainMenu.js';
import styles from "./StartingScreen.css";
import logo from "./pics/inrwav-logo.png";


class StartingScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked: false
        }

    }

    clickedFunction = (e) => {
        this.setState({clicked: true});
    }
    
    componentDidMount(){
        setTimeout(() =>{
            document.addEventListener('click', this.clickedFunction)
        }, 3000)
    }
    componentWillUnmount(){
        document.removeEventListener('click', this.clickedFunction)
    }


    render(){
        if(this.state.clicked){
            return(
                <div>
                    <MainMenu/>
                </div>
            )
        } else{
            return(
                <div className="starting-screen">
                    <div className="scrolling-image"></div>
                    <div className="logo-description">
                        <img src={logo} alt="oops!"/>
                        <h2>...Click to Continue...</h2>
                    </div>
                    
                </div>
            )
        }
        // return(
        //     <div className="starting-screen">
        //         <h2>INRWAV</h2>
        //         <h3>...press to continue...</h3>

        //         <h2>YOOO U ACTULLAYPRESSED IT</h2>
        //     </div>
        // )
    }
}

export default StartingScreen;