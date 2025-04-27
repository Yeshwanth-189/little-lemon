import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/restauranfood.jpg";

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
          We are a family-owned Mediterranean restaurant, dedicated to bringing
          you the rich, authentic flavors of traditional recipes, lovingly
          crafted and served with a modern twist. Every dish we serve tells a
          story — a celebration of heritage, hospitality, and culinary
          creativity.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>

      {/* Image */}
      <div className="hero-image">
        <img src={HeroImage} alt="Restaurant" />
      </div>

      {/* Empty margin columns */}
      <div className="hero-empty"></div>
    </section>
  );
}

export default Hero;
