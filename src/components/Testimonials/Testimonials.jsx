import React from "react";
import { testimonialsData } from "./testimonialsData"; // Import your data
import './testimonials.css'; // Import the external CSS file
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Testimonials = () => {
  return (
    <section id="testimonial-section" className="testimonial-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2>Testimonials</h2>
              <h5>People love us</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Swiper
              spaceBetween={50} // Space between slides
              loop={true} // Loop the slides
              autoplay={{
                delay: 5000, // Auto-slide every 5 seconds
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
              }}
              speed={1500} // Adjust speed for smooth scrolling
              slidesPerView={1} // Show one testimonial at a time
              breakpoints={{
                768: {
                  slidesPerView: 2, // Show 2 slides on medium screens
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides on large screens
                },
              }}
              modules={[Autoplay]} // Autoplay module
              className="testimonial-carousel"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index} className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-avatar">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="testimonial-avatar-img"
                      />
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left testimonial-quote-icon" aria-hidden="true"></i>
                      <p className="testimonial-description">{testimonial.text}</p>
                      <i className="fa fa-quote-right testimonial-quote-icon" aria-hidden="true"></i>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-name">
                        <h3>{testimonial.name}</h3>
                        <p className="testimonial-title">{testimonial.title}</p>
                      </div>
                      <div className="testimonial-rating">
                        <ul className="rating-list">
                          {Array.from({ length: testimonial.rating }).map((_, index) => (
                            <li key={index} className="rating-star">
                              <i className="fa fa-star"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
