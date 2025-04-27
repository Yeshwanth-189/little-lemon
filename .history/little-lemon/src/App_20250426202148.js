import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <RouterLink to="/">Little Lemon</RouterLink>
      </div>
      <ul className="nav-links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/menu">Menu</RouterLink>
        </li>
        {/* Scroll to About Section */}
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70} // Adjust if your NavBar is sticky
          >
            About
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/reservation">Reservation</RouterLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
