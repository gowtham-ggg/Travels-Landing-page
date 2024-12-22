import React from "react";
import "./vehicles.css"; 
import kia from "../../assets/kia.png";
import innova from "../../assets/innova.jpg";

const vehiclesData = [
  {
    id: 1,
    name: "Kia",
    image: kia,
    specs: [
      { icon: "fa-user-plus", text: "4 Person" },
      { icon: "fa-map", text: "20 KM" },
      { icon: "fa-briefcase", text: "4 Bags" },
      { icon: "fa-star", text: "New" },
      { icon: "fa-taxi", text: "2024" },
    ],
    price: "4,999.00/Day",
  },
  {
    id: 2,
    name: "Innova",
    image: innova,
    specs: [
      { icon: "fa-user-plus", text: "6 Person" },
      { icon: "fa-map", text: "20 KM" },
      { icon: "fa-briefcase", text: "6 Bags" },
      { icon: "fa-star", text: "New" },
      { icon: "fa-taxi", text: "2024" },
    ],
    price: "5,555.00/Day",
  },
];

const Vehicles = () => {
  return (
    <section className="vehicles-section" id="Vechicles">
      <div className="section-header">
        <h1>Our Vehicles</h1>
        <p>24/7 customer service</p>
      </div>

      <div className="vehicles-grid">
        {vehiclesData.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-image-wrapper">
              <img className="vehicle-image" src={vehicle.image} alt={vehicle.name} />
              <div className="image-overlay">
                <a href={vehicle.image} className="image-zoom">
                  <i className="fa fa-search-plus" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="vehicle-info">
              <h3 className="vehicle-title">{vehicle.name}</h3>
              <ul className="vehicle-specs">
                {vehicle.specs.map((spec, index) => (
                  <li key={index}>
                    <i className={`fa ${spec.icon}`}></i> {spec.text}
                  </li>
                ))}
              </ul>
              <div className="vehicle-price">
              <i className="fa fa-money-bill-alt"></i> ₹
              {vehicle.price}
              </div>
              <a className="vehicle-booking-btn" href="#Contact">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vehicles;
