import logo from './logo.svg';
import StartingScreen from './pages/StartingScreen.js';
import Navbar from './components/Navbar.js';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StartingScreen/>
    </div>
  );
}

export default App;
