import React, { useState } from "react";
import "../styles/Vroom.css";

export const Vroom = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return ( 
    <div className="booking-popup">
      <h2>Book Your Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="pickup-location">Pickup Location:</label>
            <input type="text" id="pickup-location" required placeholder="Please Enter Location From" />
          </div>
          <div className="datetime-group">
            <div className="datetime-wrapper">
              <label htmlFor="pickup-date">Pickup Date:</label>
              <input type="date" id="pickup-date" required />
            </div>
            <div className="datetime-wrapper">
              <label htmlFor="pickup-time">Pickup Time:</label>
              <input type="time" id="pickup-time" required />
            </div>
          </div>
        </div>
        

        <div className="input-group">
          <div className="input-wrapper">
            <label htmlFor="dropoff-location">Drop-off Location:</label>
            <input type="text" id="dropoff-location" required placeholder="Please Enter Location To" />
          </div>
          <div className="datetime-group">
            <div className="datetime-wrapper">
              <label htmlFor="dropoff-date">Drop-off Date:</label>
              <input type="date" id="dropoff-date" required />
            </div>
            <div className="datetime-wrapper">
              <label htmlFor="dropoff-time">Drop-off Time:</label>
              <input type="time" id="dropoff-time" required />
            </div>
          </div>
        </div>


        <button type="submit">View Vehicles</button>
      </form>

      {showAlert && (
        <div className="custom-alert">
           Submitted successfully!
        </div>
      )}
    </div>
  );
};
