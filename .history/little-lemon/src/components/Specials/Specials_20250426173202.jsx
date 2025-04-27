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
        <h2>Specials</h2>
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
            Fresh tomatoes, cucumbers, onions, olives, and feta cheese, served
            with pita.
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
            Grilled bread rubbed with garlic and topped with olive oil and
            tomatoes.
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
            Freshly grilled fish seasoned with Mediterranean herbs and lemon.
          </p>
          <button className="order-button">Order a Delivery 🚴‍♂️</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
