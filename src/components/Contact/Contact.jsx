import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import './Contact.css'; // Import the external CSS file

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9a51a62-c9c5-4bf9-b6ca-9ad2c055701f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="contact-container"
      id="Contact"
    >
      <h1 className="contact-heading">
        Contact <span className="contact-highlight">With Us...</span>
      </h1>
      <p className="contact-description">
      Fill out the form below, and our team will reach out to you as soon as possible. We're excited to help you with your taxi booking and any other inquiries. Let's get you on the road!
      </p>

      <form onSubmit={onSubmit} className="contact-form">
        <div className="contact-inputs">
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="Name"
              id="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              name="Email"
              id="email"
            />
          </div>
        </div>

        <div className="contact-inputs">
          <div className="input-group">
            <label htmlFor="pickup-location">Pickup Location</label>
            <input
              type="text"
              placeholder="Pickup Location"
              required
              name="PickupLocation"
              id="pickup-location"
            />
          </div>
          <div className="input-group">
            <label htmlFor="dropoff-location">Dropoff Location</label>
            <input
              type="text"
              placeholder="Dropoff Location"
              required
              name="DropoffLocation"
              id="dropoff-location"
            />
          </div>
        </div>

        <div className="contact-inputs">
          <div className="input-group">
            <label htmlFor="pickup-time">Pickup Date & Time</label>
            <input
              type="datetime-local"
              required
              name="PickupTime"
              id="pickup-time"
            />
          </div>
          <div className="input-group">
            <label htmlFor="passengers">Number of Passengers</label>
            <input
              type="number"
              placeholder="Number of Passengers"
              required
              name="Passengers"
              id="passengers"
              min="1"
              max="10"
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="special-requests">Special Requests or Details</label>
          <textarea
            className="message-textarea"
            name="SpecialRequests"
            id="special-requests"
            placeholder="Additional details or special requests"
          ></textarea>
        </div>

        <button type="submit" className="contact-button">
          {result ? result : "Send Booking Request"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
