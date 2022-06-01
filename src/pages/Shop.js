import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../components/Navbar.js";

function Shop(){

    return(
        <div className="shop">
            <h2>SHOP</h2>
            <Navbar/>
        </div>
    )
}

export default Shop;