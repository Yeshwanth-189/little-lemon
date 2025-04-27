import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-grid">
      {/* Empty margin columns */}
      <div className="hero-empty"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>

      {/* Image */}
      <div className="hero-image">
        <img src="your-image-path.jpg" alt="Restaurant" />
      </div>

      {/* Empty margin columns */}
      <div className="hero-empty"></div>
    </section>
  );
}

export default Hero;
