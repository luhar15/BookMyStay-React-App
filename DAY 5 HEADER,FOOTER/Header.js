import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1 style={{ fontSize: '25px',fontFamily :'cursive',color:'rgb(28, 120, 28)'}}>BookMyStay</h1>
          </div>
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href ="/about">About</a></li>
            <li className="nav-item"><a href="/bookings">Bookings</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
            <li className="nav-item2"><a href="/login" className="cta-button">Login</a></li>
          </ul>
        </nav>
      </header>
  );
}
export default Header;