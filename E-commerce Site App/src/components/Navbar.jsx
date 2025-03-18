import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/images/storelogo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <span className="navbar-tile"> Market Central App</span>
    </nav>
  );
}

export default Navbar;
