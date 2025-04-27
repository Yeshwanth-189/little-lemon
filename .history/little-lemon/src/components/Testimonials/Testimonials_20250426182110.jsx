import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-grid">
      {/* Empty margin */}
      <div className="testimonials-empty"></div>

      {/* 4 Rating Boxes */}
      <div className="rating-card">
        <div className="rating-header">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="User 1"
          />
          <h4>Anna Smith</h4>
        </div>
        <div className="rating-stars">⭐⭐⭐⭐⭐</div>
        <p>
          "Absolutely loved the food and the warm atmosphere. Will definitely
          come back!"
        </p>
      </div>

      <div className="rating-card">
        <div className="rating-header">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="User 2"
          />
          <h4>John Doe</h4>
        </div>
        <div className="rating-stars">⭐⭐⭐⭐</div>
        <p>
          "Fantastic service and delicious Mediterranean dishes. Highly
          recommended!"
        </p>
      </div>

      <div className="rating-card">
        <div className="rating-header">
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="User 3"
          />
          <h4>Maria Garcia</h4>
        </div>
        <div className="rating-stars">⭐⭐⭐⭐⭐</div>
        <p>
          "A beautiful blend of traditional and modern flavors. The lemon
          dessert was heavenly!"
        </p>
      </div>

      <div className="rating-card">
        <div className="rating-header">
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="User 4"
          />
          <h4>David Johnson</h4>
        </div>
        <div className="rating-stars">⭐⭐⭐⭐</div>
        <p>
          "Charming restaurant with fresh and flavorful meals. A wonderful
          dining experience."
        </p>
      </div>

      {/* Empty margin */}
      <div className="testimonials-empty"></div>
    </section>
  );
}

export default Testimonials;
