import React from 'react';

function Navbar(){

    return(
        <div className="navbar-container">
            <ul className="navbar">
                <li className="item">
                    <Link to="/"><h2>HOME</h2></Link>
                </li>
                <li className="item">
                    <h2>SOUNDS</h2>
                </li>
                <li className="item">
                    <Link to={{ pathname: "https://jordonalva.myshopify.com/" }}><h2>SHOP</h2></Link>
                </li>
                <li className="item">
                    <Link to="/stages"><h2>STAGES</h2></Link>
                </li>
                <li className="item">
                    <Link to="/contact"><h2>REACH</h2></Link>
                </li>
                <li className="item">
                    <Link to="/profile"><h2>PROFILE</h2></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
