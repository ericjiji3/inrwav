import React, {Component, useEffect} from 'react';
import MainMenu from './MainMenu.js';
import styles from "./StartingScreen.css";
import logo from "./pics/inrwav-logo.png";


class StartingScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked: false,
            logoPosition: 0
        }
        this.imgRef = React.createRef();
    }

    adjustLogoPosition = () => {
        let logoWidth = this.imgRef.current.clientWidth;
        let position = -((window.innerWidth/2) + (logoWidth/2));
        this.setState({logoPosition: position})
    }

    clickedFunction = (e) => {
        this.setState({clicked: true});
    }
    
    componentDidMount(){
        window.addEventListener('load', this.adjustLogoPosition);
        window.addEventListener('resize', this.adjustLogoPosition);
        setTimeout(() =>{
            document.addEventListener('click', this.clickedFunction)
        }, 6000)
    }
    componentWillUnmount(){
        window.removeEventListener('load', this.adjustLogoPosition);
        window.removeEventListener('resize', this.adjustLogoPosition);
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
            const styles = {
                imgPosition: {
                    transform: 'translateX(' + this.state.logoPosition + 'px)'
                }
            };
            return(
                <div className="starting-screen">
                    <div className="scrolling-image"></div>
                    <div className="logo-description">
                        <img className="logo" ref={this.imgRef} src={logo} alt="oops!"/>
                        <h2>...Click to Continue...</h2>
                    </div>
                    
                </div>
            )
        }
    }
}

export default StartingScreen;