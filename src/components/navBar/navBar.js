import React from "react";
import './navBar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;