import React from 'react';
import './Footer.css'; // Import your custom CSS file
import footeLogo from "../../assets/footerlogo.png"
const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo-container">
              <a href="index.html" className="footer-logo">
                <img src={footeLogo} className="footer-logo-img" alt="TaxiOnline Logo" />
                <h1 className="footer-logo-text">Ramnad Taxi</h1>
              </a>
            </div>
            <div className="footer-description">
              <p>Your Reliable Taxi Service. Ride in Comfort and Convenience with Our Taxi Services.</p>
            </div>
            <div className="footer-social-icons">
              <a href="#"><i className="fa fa-facebook footer-social-icon"></i></a>
              <a href="#"><i className="fa fa-twitter footer-social-icon"></i></a>
              <a href="#"><i className="fa fa-google footer-social-icon"></i></a>
              <a href="https://wa.me/7094685268" target="_blank" class="footer-social-icon">
                <i class="fa fa-whatsapp"></i>
                </a>

            </div>
          </div>

          <div className="footer-column">
            <div className="footer-heading">
              <h3>Contact:</h3>
            </div>
            <div className="footer-contact-info">
              <div className="contact-info-item">
                <h6>Address:</h6>
                <p><i className="fa fa-map"></i>Nehru Nagar, Ramanathapuram</p>
                <p className='map'><a href="https://maps.app.goo.gl/VbgU2zK1K5MJrjHV8" target="_blank" rel="noopener noreferrer" >Get Directions</a></p>
              </div>
              <div className="contact-info-item">
                <h6>Phone:</h6>
                <p><i className="fa fa-phone"></i>+91 987564321</p>
                <p><i className="fa fa-phone"></i>+91 7094685268</p>
              </div>
              <div className="contact-info-item">
                <h6>Email:</h6>
                <p><i className="fa fa-envelope"></i>info@example.com</p>
                <p><i className="fa fa-envelope"></i>email@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <div className="footer-copy">
                <p>Ramnad Taxi © 2024 - Designed by <a href="https://gowthamgportfolio.netlify.app/" target="_blank" rel="noopener noreferrer"><u>Gowtham G</u> </a></p>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
