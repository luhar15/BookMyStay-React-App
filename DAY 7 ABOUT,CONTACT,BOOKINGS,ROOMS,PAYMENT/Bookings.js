import React, { useState } from 'react';
import './bookings.css'; 
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


const Bookings = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [totalRooms, setTotalRooms] = useState(1);
  const [isACSelected, setIsACSelected] = useState(false);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumberOfPersonsChange = (e) => {
    setNumberOfPersons(parseInt(e.target.value));
  };

  const handleTotalRoomsChange = (e) => {
    setTotalRooms(parseInt(e.target.value));
  };

  const handleACSelection = (e) => {
    setIsACSelected(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can access the selected values using the state variables
    // checkInDate, checkOutDate, numberOfPersons, totalRooms, isACSelected
    console.log('Form submitted:', {
      checkInDate,
      checkOutDate,
      numberOfPersons,
      totalRooms,
      isACSelected,
    });
  };

  return (
    <div>
      <Header/>
      <div className='bg1'>
    <div className="bookings-page">
      <h2 style={{fontSize: '30px',fontFamily :'cursive',color:'black'}}>BookMyStay</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check-in Date:</label>
          <input type="date" value={checkInDate} onChange={handleCheckInDateChange} required />
        </div>
        <div className="form-group">
          <label>Check-out Date:</label>
          <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} required />
        </div>
        <div className="form-group">
          <label>Number of Persons:</label>
          <input
            type="number"
            min="1"
            value={numberOfPersons}
            onChange={handleNumberOfPersonsChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Rooms:</label>
          <input
            type="number"
            min="1"
            value={totalRooms}
            onChange={handleTotalRoomsChange}
            required
          />
        </div>
        <div className="form-group">
          <label>AC or Non-AC:</label>
          <label className="checkbox-label">
            <input type="checkbox" checked={isACSelected} onChange={handleACSelection}/>AC</label>
        </div>
        <Link to ='/room'>
        <button type="submit">Submit</button></Link>
      </form>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Bookings;
