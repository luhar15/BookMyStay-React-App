import React from "react";
import './home.css';
import Header from "./Header";
import Footer from "./Footer";
const home = () => {
    return (
      <div className="home-page">
          <Header/>
      <section className="hero-section">
        <div className="hero-content">
          <h1 style={{ fontSize: '30px',fontFamily :'cursive',color:'black'}}>BookMyStay</h1>
          <p style={{color:'black'}}>Experience exceptional hospitality and unforgettable moments.</p>
          <a href="/bookings" className="cta-button">Book Now</a>
        </div>
      </section>
      <section className="features-section">
        <div className="feature">
          <h2>Explore</h2>
          <p>Discover stunning rooms and hotels.</p>
        </div>
        <div className="feature">
          <h2>Indulge</h2>
          <p>Treat yourself to world-class stay experiences.</p>
        </div>
        <div className="feature">
          <h2>Relax</h2>
          <p>Unwind and rejuvenate in our luxurious rooms.</p>
        </div>
      </section>
      <Footer/>
    </div>
      );
}
export default home;