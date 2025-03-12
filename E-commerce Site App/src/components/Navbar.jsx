import React from 'react';
import logo from '../assets/images/logo.jpg';

function Navbar() {
    return (
        <nav className="navbar">
        <img src={logo} alt="logo" className="navbar-logo"/>
        <span className= "navbar-tile"> My E-commerce App </span>
        </nav>
    );
}

export default Navbar;