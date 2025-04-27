import React from "react";
import "./About.css";
import RestaurantInside from "../../assets/restaurant.jpg";
import RestaurantFood from "../../assets/restaurantfood.jpg";

function About() {
  return (
    <section className="about-grid">
      {/* Empty left margin */}
      <div className="about-empty"></div>

      {/* Text Content */}
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

      {/* Images Section */}
      <div className="about-images">
        <img
          className="about-img-1"
          //src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
          src={RestaurantInside}
          alt="Restaurant Inside"
        />
        <img
          className="about-img-2"
          src={RestaurantFood}
          //src={RestaurantInside}
          alt="Restaurant Food"
        />
      </div>

      {/* Empty right margin */}
      <div className="about-empty"></div>
    </section>
  );
}

export default About;
