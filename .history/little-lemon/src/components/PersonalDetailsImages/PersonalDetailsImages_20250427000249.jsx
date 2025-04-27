import React from "react";
import "./PersonalDetailsImages.css";
import RestaurantImage from "../../assets/restaurantinside.jpg";
import FishImage from "../../assets/grilledfish.jpg";
import PastaImage from "../../assets/pasta.jpg";

function PersonalDetailsImages() {
  return (
    <section className="reservation-images-grid">
      {/* Empty margins */}
      <div className="reservation-images-empty"></div>

      {/* Images and Button Section */}
      <div className="reservation-images-content">
        <div className="images-row">
          <img src={RestaurantImage} alt="Restaurant Interior" />
          <img src={FishImage} alt="Chef Cooking" />
          <img src={PastaImage} alt="Delicious Food" />
        </div>
      </div>

      {/* Empty margins */}
      <div className="reservation-images-empty"></div>
    </section>
  );
}

export default PersonalDetailsImages;
