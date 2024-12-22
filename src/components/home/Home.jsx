import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
import mercedesImage from '../../assets/car1.jpg';
import toyotaImage from '../../assets/car2.jpg';

const Home = () => {
  return (
    <div className="home" id="Home">
      <header id="slider-home" className="slider slider-prlx">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 15 seconds
          loop={true} // Enable looping
          className="parallax-slider"
        >
          <SwiperSlide>
            <div
              className="bg-img valign"
              style={{
                backgroundImage: `url(${mercedesImage})`,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="caption text-left">
                      <h2>Welcome!</h2>
                      <h1> <span>Y</span>our <span>R</span>eliable <span>T</span>axi <span>S</span>ervice</h1>
                      <p style={{ maxWidth: '700px' }}>
                        Ride in Comfort and Convenience with Our Taxi Services
                      </p>
                      <h3>Phone: +1 123456789</h3>
                      <div className="home-button-box home-slider-btn">
                        <a href="#contact" className="button home-btn js-scroll">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-img valign"
              style={{
                backgroundImage: `url(${toyotaImage})`,
              }}
              data-overlay-dark="6"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="caption text-left">
                      <h2>Professional Services</h2>
                      <h1> <span>Y</span>our <span>T</span>rusted <span>D</span>elivery <span>P</span>artner</h1>
                      <p style={{ maxWidth: '700px' }}>
                        Delivering More Than Packages: Your Trusted Delivery Partner
                      </p>
                      <h3>Phone: +1 123456789</h3>
                      <div className="home-button-box home-slider-btn">
                        <a href="#0" className="button home-btn js-scroll">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    </div>
  );
};

export default Home;
