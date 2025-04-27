import React from "react";
import "./ReservationImages.css";
import RestaurantImage from "../../assets/restaurantinside.jpg";
import ChefImage from "../../assets/restaurant chef B.jpg";
import FoodImage from "../../assets/restauranfood.jpg";

function ReservationImages() {
  return (
    <section className="reservation-images-grid">
      {/* Empty margins */}
      <div className="reservation-images-empty"></div>

      {/* Images and Button Section */}
      <div className="reservation-images-content">
        <div className="images-row">
          <img
            src="https://source.unsplash.com/featured/?restaurant"
            alt="Restaurant View"
          />
          <img
            src="https://source.unsplash.com/featured/?chef"
            alt="Chef Cooking"
          />
          <img
            src="https://source.unsplash.com/featured/?food"
            alt="Delicious Food"
          />
        </div>

        <div className="button-row">
          <button className="submit-button">Reserve a Table</button>
        </div>
      </div>

      {/* Empty margins */}
      <div className="reservation-images-empty"></div>
    </section>
  );
}

export default ReservationImages;
