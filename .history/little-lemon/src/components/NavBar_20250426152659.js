import React from "react";
import "./Nav.css"; // Importing the CSS we will write

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">Little Lemon</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#reservation">Reservation</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
