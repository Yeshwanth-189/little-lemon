import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./NavBar.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
