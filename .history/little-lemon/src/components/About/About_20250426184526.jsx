import React from "react";
import "./About.css";
import RestaurantInside from "../../assets/restaurant.jpg";

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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
          <br />
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      {/* Images Section */}
      <div className="about-images">
        <img
          className="about-img-1"
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
          alt="Restaurant Inside"
        />
        <img
          className="about-img-2"
          src={RestaurantInside}
          alt="Restaurant Food"
        />
      </div>

      {/* Empty right margin */}
      <div className="about-empty"></div>
    </section>
  );
}

export default About;
