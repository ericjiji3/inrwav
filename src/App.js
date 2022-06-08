import logo from './logo.svg';
import MainMenu from './pages/MainMenu.js';
import Navbar from './components/Navbar.js';
import './App.css';
import { Link } from "react-router-dom";
import startingScreen from "./pics/startingScreen.mp4";
import stars from "./pics/stars.gif";
import clickToContinue from "./pics/clickToContinue.mp4";
import hello from "./pics/hello.mp4";

function App() {
  return (
    <div className="App">
      <div className="starting-screen ">
        {/* <video autoPlay loop muted>
          <source src={startingScreen} type="video/mp4"/>
        </video> */}
        <video autoPlay>
          <source src={hello} type="video/mp4"/>
        </video>
      </div>
      {/* <MainMenu/> */}
    </div>
  );
}

export default App;
