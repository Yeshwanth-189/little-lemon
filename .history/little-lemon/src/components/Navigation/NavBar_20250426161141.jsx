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
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/reservation">RESERVATION</Link>
        </li>
        <li>
          <Link className="nav-links" to="/order">
            ORDER ONLINE
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/login">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
