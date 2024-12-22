import React from 'react';
import './Reservation.css'; 
import taxiDriver from "../../assets/taxi-driver.svg";

const Reservation = () => {
  return (
    <section id="reservation" className="reservation-area">
      <div className="reservation-container">
        <div className="reservation-row">
          <div className="reservation-col">
            <div className="image-container">
              <img
                src={taxiDriver}
                alt="Taxi Driver"
                className="reservation-image"
              />
            </div>
            <h2 className="reservation-title">24/7 Reliable Taxi Service</h2>
            <h5 className="reservation-subtitle">
              Ride in Comfort and Convenience with Our Taxi Services
            </h5>
            <div className="reservation-button">
              <a href="#Contact" className="btn-book-now">
                <i className="fa fa-calendar-check-o"></i> Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
