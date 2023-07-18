import React from 'react';
import './about.css';
import { FaStar } from 'react-icons/fa';
import Header from "./Header";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <div>
        <Header/>
    <div className="about-page">
      <div className="about-container">
        <div className="about-card">
          {/* <h1>About</h1><h1 className="book3" style={{ fontSize: '30px',fontFamily :'cursive',color:'black'}}>BookMyStay</h1> */}
          <h1>About </h1>
          <p>
            Welcome to our Hotel Booking App! We are dedicated to providing you with the best hotel booking experience possible. Whether you're planning a business trip, family vacation, or romantic getaway, our app offers a wide range of hotels to suit your needs.
          </p>
          <p>
            Our team of experts has carefully curated a collection of top-rated hotels from around the world. We partner with reputable hotel chains and independent accommodations to ensure that you have access to the best options at competitive prices.
          </p>
          <p>
            With our user-friendly interface, you can easily search, compare, and book hotels in just a few clicks. Our app provides detailed information about each hotel, including amenities, room types, and customer reviews. We believe in transparency and strive to give you all the information you need to make an informed decision.
          </p>
          <p>
            In addition to hotel bookings, we also offer additional services such as car rentals, airport transfers, and guided tours to enhance your travel experience. Our goal is to make your trip planning as seamless as possible, allowing you to focus on creating lasting memories.
          </p>
          <p>
            We value your feedback and continuously work to improve our app. If you have any questions, suggestions, or concerns, please don't hesitate to contact our customer support team. We're here to assist you 24/7 and ensure that your experience with our app exceeds your expectations.
          </p>
          <p>
            Thank you for choosing our Hotel Booking App. We look forward to helping you find the perfect accommodations for your next trip!
          </p>
          <div className="ratings">
            <h2>What our customers say:</h2>
            <div className="rating-card">
              <div className="rating-details">
                <div className="rating-stars">
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                </div>
                <p className="rating-comment">
                  "The Hotel Booking App made planning my vacation so easy. The variety of hotels and the detailed information helped me find the perfect accommodation. Highly recommended!"
                </p>
                <p className="rating-author">- Kodi</p>
              </div>
            </div>
            <div className="rating-card">
              <div className="rating-details">
                <div className="rating-stars">
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  {/* <FaStar className="star-icon" /> */}
                  {/* <FaStar className="star-icon" /> */}
                </div>
                <p className="rating-comment">
                  "The Hotel Booking App made planning my vacation so easy. The variety of hotels and the detailed information helped me find the perfect accommodation. Highly recommended!"
                </p>
                <p className="rating-author">- Akash</p>
              </div>
            </div>
            <div className="rating-card">
              <div className="rating-details">
                <div className="rating-stars">
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  {/* <FaStar className="star-icon" /> */}
                </div>
                <p className="rating-comment">
                  "The Hotel Booking App made planning my vacation so easy. The variety of hotels and the detailed information helped me find the perfect accommodation. Highly recommended!"
                </p>
                <p className="rating-author">- Rahul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutPage;
