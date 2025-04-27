import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">Little Lemon</Link>
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
