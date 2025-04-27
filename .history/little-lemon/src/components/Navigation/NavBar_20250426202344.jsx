import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/Logo.svg";
import "./NavBar.css";

function Nav() {
  return (
    <nav className="nav-grid">
      {/* Empty 1-2 columns */}
      <div className="nav-empty"></div>

      {/* Logo 3-4 */}
      <div className="nav-logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>

      {/* Nav links 5-10 */}
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/reservation">RESERVATION</Link>
        <Link to="/order-online">ORDER ONLINE</Link>
        <Link to="/login">LOGIN</Link>
      </div>

      {/* Empty 11-12 columns */}
      <div className="nav-empty"></div>
    </nav>
  );
}

export default Nav;
