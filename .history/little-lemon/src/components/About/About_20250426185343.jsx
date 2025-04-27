import React, { useState } from "react";
import "./About.css";
import RestaurantInside from "./path-to-your-image/restaurant-inside.jpg"; // Your imported image
import RestaurantFood from "./path-to-your-image/restaurant-food.jpg"; // Your second image

function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="about-grid">
      <div className="about-empty"></div>

      {/* Text Section */}
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the
          heart of Chicago. We are passionate about crafting authentic,
          flavorful dishes that celebrate the rich culinary traditions of the
          Mediterranean, with a fresh and modern twist.
          <br />
          <br />
          Every plate we serve is a tribute to fresh ingredients, time-honored
          recipes, and the welcoming spirit that defines our culture.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="about-images"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          className="about-img-1"
          src={hovered ? RestaurantFood : RestaurantInside}
          alt="Restaurant"
        />
        <img
          className="about-img-2"
          src="https://images.unsplash.com/photo-1555992336-03a23c75f7c9"
          alt="Mediterranean Dish"
        />
      </div>

      <div className="about-empty"></div>
    </section>
  );
}

export default About;
