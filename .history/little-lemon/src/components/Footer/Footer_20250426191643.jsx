import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Using react-icons

function Footer() {
  return (
    <footer className="footer-grid">
      {/* Empty margin */}
      <div className="footer-empty"></div>

      {/* Navigation Links */}
      <div className="footer-nav">
        <h4>Navigation</h4>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Reservation</li>
        </ul>
      </div>

      {/* Address and Contact */}
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>
          123 Main Street
          <br />
          Chicago, IL 60601
        </p>
        <p>Phone: (123) 456-7890</p>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      {/* Empty margin */}
      <div className="footer-empty"></div>
    </footer>
  );
}

export default Footer;
