import React from "react";
import "./Reservation.css";

function Reservation() {
  return (
    <section className="reservation-grid">
      {/* Empty left margin */}
      <div className="reservation-empty"></div>

      {/* Main Reservation Form */}
      <div className="reservation-main">
        {/* Row 1: Seating Options */}
        <div className="reservation-row">
          <div className="reservation-col">
            <label>
              <input type="radio" name="seating" value="indoor" /> Indoor
              seating
            </label>
          </div>
          <div className="reservation-col">
            <label>
              <input type="radio" name="seating" value="outdoor" /> Outdoor
              seating
            </label>
          </div>
        </div>

        {/* Row 2: Date and Diners */}
        <div className="reservation-row">
          <div className="reservation-col">
            <label>Date</label>
            <select>
              <option>Select Date</option>
              <option>April 27, 2025</option>
              <option>April 28, 2025</option>
            </select>
          </div>
          <div className="reservation-col">
            <label>Number of Diners</label>
            <select>
              <option>No. of Diners</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>

        {/* Row 3: Occasion and Time */}
        <div className="reservation-row">
          <div className="reservation-col">
            <label>Occasion</label>
            <select>
              <option>Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>
          </div>
          <div className="reservation-col">
            <label>Time</label>
            <select>
              <option>Select Time</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Empty right margin */}
      <div className="reservation-empty"></div>
    </section>
  );
}

export default Reservation;
