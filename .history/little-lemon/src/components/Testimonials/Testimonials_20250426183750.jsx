import React from "react";
import "./Testimonials.css";

function StarRating({ count }) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#f4ce14"
        width="20px"
        height="20px"
        style={{ marginRight: "4px" }}
      >
        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.882L19.335 24 12 19.897 4.665 24 6 15.632 0 9.75l8.332-1.595z" />
      </svg>
    );
  }
  return <div className="rating-stars">{stars}</div>;
}

function Testimonials() {
  return (
    <section className="testimonials-grid">
      <div className="testimonials-heading">
        <h2>Testimonials</h2>
      </div>
      {/* Empty margin */}
      <div className="testimonials-empty"></div>

      {/* 4 Rating Boxes */}
      <div className="ratings-container">
        <div className="rating-card">
          <div className="rating-header">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="User 1"
            />
            <h4>Anna Smith</h4>
          </div>
          <StarRating count={5} />
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
          <StarRating count={5} />
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
          <StarRating count={5} />
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
          <StarRating count={5} />
          <p>
            "Charming restaurant with fresh and flavorful meals. A wonderful
            dining experience."
          </p>
        </div>
      </div>
      {/* Empty margin */}
      <div className="testimonials-empty"></div>
    </section>
  );
}

export default Testimonials;
