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
        <RouterLink to="/">HOME</RouterLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70} // Adjust if your NavBar is sticky
        >
          ABOUT
        </ScrollLink>
        <RouterLink to="/menu">MENU</RouterLink>
        <RouterLink to="/reservation">RESERVATION</RouterLink>
        <RouterLink to="/order-online">ORDER ONLINE</RouterLink>
        <RouterLink to="/login">LOGIN</RouterLink>
      </div>

      {/* Empty 11-12 columns */}
      <div className="nav-empty"></div>
    </nav>
  );
}

export default Nav;
