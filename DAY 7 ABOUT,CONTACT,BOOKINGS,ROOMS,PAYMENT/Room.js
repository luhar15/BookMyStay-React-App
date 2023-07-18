import React from 'react';
import './room.css';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

  const Room = () => {
    const roomers = [
      {
        id: 1,
        title: 'Room 1',
        description: 'About room 1',
        goal: 5000,
        currentAmount: 2500,
        // image: './r1.jpeg', 
      },
      {
        id: 2,
        title: 'Room 2',
        description: 'About room 2',
        goal: 10000,
        currentAmount: 7500,
        // image: './r2.jpg', 
      },
      {
        id: 3,
        title: 'Room 3',
        description: 'About room 3',
        goal: 8000,
        currentAmount: 4000,
        // image: '.r3.jpg', 
      },
    ];

    return (
      <div>
        <Header/>
      <div className="room-page">
        <h1>Rooms Available </h1>
        {roomers.map((demoroom) => (
          <div key={demoroom.id} className="fundraiser-card">
            <div className="fundraiser-content">
              <div className="fundraiser-info">
                <h2>{demoroom.title}</h2>
                <p>{demoroom.description}</p>
                <p>Normal Price: ${demoroom.goal}</p>
                <p>Discount Price: ${demoroom.currentAmount}</p>
                <Link to="/payment" >
                  <a className="donate-btn">Book now</a>
                </Link>
              </div>
              <div className="fundraiser-image" >
                <img src={demoroom.image} alt={demoroom.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
    );
  };
  export default Room;