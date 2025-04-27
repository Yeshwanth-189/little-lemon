import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
      </div>

      {/* Empty 11-12 columns */}
      <div className="nav-empty"></div>
    </nav>
  );
}

export default Nav;
