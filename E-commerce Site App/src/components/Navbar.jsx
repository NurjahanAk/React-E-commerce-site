import React from "react";
import logo from "../assets/images/storelogo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
    <img src={logo} alt="logo" className="navbar-logo"/>
    <div className="navbar-tile"> Market Central App</div>
    </nav>
  );
}

export default Navbar;
