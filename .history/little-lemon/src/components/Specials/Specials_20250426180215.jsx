import React from "react";
import "./Specials.css";
import GreekSalad from "../../assets/greek salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials-grid">
      {/* Empty margin columns */}
      <div className="specials-empty"></div>

      {/* Specials Heading */}
      <div className="specials-heading">
        <h2>This weeks specials!</h2>
      </div>

      {/* Online Menu Button */}
      <div className="specials-button">
        <button>Online Menu</button>
      </div>

      {/* Empty margin columns */}
      <div className="specials-empty"></div>

      {/* Dishes Section */}
      <div className="dishes">
        {/* Dish 1 */}
        <div className="dish-card">
          <img src={GreekSalad} alt="Dish 1" />
          <div className="dish-header">
            <h3>Greek Salad</h3>
            <span>$12.99</span>
          </div>
          <p>
            A vibrant and refreshing blend of fresh tomatoes, crisp cucumbers,
            zesty onions, briny olives, and creamy feta cheese, all tossed
            together in a light Mediterranean dressing.
          </p>
          <button className="order-button">Order a Delivery 🚴‍♂️</button>
        </div>

        {/* Dish 2 */}
        <div className="dish-card">
          <img src={Bruschetta} alt="Dish 2" />
          <div className="dish-header">
            <h3>Bruschetta</h3>
            <span>$8.99</span>
          </div>
          <p>
            Crisp, golden-brown grilled bread, gently rubbed with fresh garlic,
            then generously topped with rich olive oil and ripe, juicy tomatoes.
          </p>
          <button className="order-button">Order a Delivery 🚴‍♂️</button>
        </div>

        {/* Dish 3 */}
        <div className="dish-card">
          <img src={LemonDessert} alt="Dish 3" />
          <div className="dish-header">
            <h3>Lemon Dessert</h3>
            <span>$16.99</span>
          </div>
          <p>
            A light and luscious lemon dessert crafted with the freshest citrus,
            offering a perfect harmony of sweet and tart flavors.
          </p>
          <button className="order-button">Order a Delivery 🚴‍♂️</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
