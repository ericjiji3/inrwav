import React, {Component} from 'react';
import MainMenu from './MainMenu.js';
// import Shatter from '../components/Shatter.js';
import "./StartingScreen.css";
import logo from "../pics/inrwav-logo.png";

class StartingScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked: false,
            logoPosition: 0
        }
        this.imgRef = React.createRef();
        this.shatter = this.shatter.bind(this);
    }

    adjustLogoPosition = () => {
        let logoWidth = this.imgRef.current.clientWidth;
        let position = -((window.innerWidth/2) + (logoWidth/2));
        this.setState({logoPosition: position})
    }

    clickedFunction = (e) => {
        this.shatter();
        // this.setState({clicked: true});
        
    }
    shatter(e){
        this.setState({clicked: true});
        console.log("shatter");
        
        // var pieces = 70,
        // speed = 1,
        // pieceW = 30,
        // pieceH = 30;
        // $('.logo-description .logo').hide();

        // for (var i = pieces - 1; i >= 0; i--) {
        //     $('.logo-description').prepend('<div class="piece" style="width:'+pieceW+'px; height:'+pieceH+'px"></div>');
        // };
        // gsap.to($('#popup h1'),0.2,{opacity:0});
        // $('.piece').each(function(){
        //     var distX = Math.random() * (250 - (-250)) + (-250),	
        //         distY = Math.random() * (250 - (-250)) + (-250),
        //         rotY  = Math.random() * (720 - (-720)) + (-720),
        //         rotX  = Math.random() * (720 - (-720)) + (-720),
        //         z = Math.random() * (500 - (-500)) + (-500);
        //         gsap.to($(this), speed, {x:distX, y:distY, rotationX:rotX, rotationY:rotY, opacity: 0, z: z});	
        // });
    }
    componentDidMount(){
        window.addEventListener('load', this.adjustLogoPosition);
        window.addEventListener('resize', this.adjustLogoPosition);
        // setTimeout(() =>{
        //     document.addEventListener('click', this.clickedFunction)
        // }, )
        // 9000
        document.addEventListener('click', this.shatter);
    }
    componentWillUnmount(){
        window.removeEventListener('load', this.adjustLogoPosition);
        window.removeEventListener('resize', this.adjustLogoPosition);
        // document.removeEventListener('click', this.clickedFunction)
        document.removeEventListener('click', this.shatter);
    }


    render(){
        // if(this.state.clicked){
        //     setTimeout(() =>{
        //         return(
        //             <div>
        //                 <MainMenu/>
        //             </div>
        //             )
        //         }, 2000)  
        // } else{
        //     const styles = {
        //         imgPosition: {
        //             transform: 'translateX(' + this.state.logoPosition + 'px)'
        //         }
        //     };
            return(
                <div className="container">
                    {this.state.clicked ? 
                        <div>
                        <MainMenu/>
                        </div>
                        :
                        <div className="starting-screen">
                        <div className="scrolling-image"></div>
                        <div className="logo-description">
                            <img className="logo" ref={this.imgRef} src={logo} alt="oops!"/>
                            <h2>...Click to Continue...</h2>
                        </div>
                        </div>
                    }
                    
                </div>
                
            )
        }
    }
// }

export default StartingScreen;