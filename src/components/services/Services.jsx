import React from "react";
import "./services.css"; 
import taxi from "../../assets/s1.svg"
import service from "../../assets/s2.svg"
const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">OUR SERVICES</h2>
          <h5 className="services-subtitle">We are Always There at Your Services</h5>
        </div>
        <div className="services-cards">
          {/* Single Service */}
          <div className="service-card" data-wow-delay="0.2s">
            <div className="service-icon-wrapper">
              <img
                src={taxi}
                alt="Taxi"
                className="service-icon"
              />
            </div>
            <h5 className="service-title">Taxi</h5>
            <p className="service-description">
              Ride in Comfort and Convenience with Our Taxi Services
            </p>
          </div>

          {/* Single Service */}
          <div className="service-card" data-wow-delay="0.2s">
            <div className="service-icon-wrapper">
              <img
                src={service}
                alt="Service"
                className="service-icon"
              />
            </div>
            <h5 className="service-title">Service</h5>
            <p className="service-description">
              24/7 fast taxi services. We are Always There at Your Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
