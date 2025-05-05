import React from "react";
import './navBar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="desktopMenu">
        <Link 
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >Home</Link>
        <Link 
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >About</Link>
        <Link 
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >Portfolio</Link>
        <Link 
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;