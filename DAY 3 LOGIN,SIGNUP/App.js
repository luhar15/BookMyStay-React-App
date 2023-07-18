import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Bookings from './Components/Bookings';
import Room from './Components/Room';
import Payment from './Components/Payment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Bookings' element={<Bookings/>}/>
          <Route path='/Room' element={<Room/>}/>
          <Route path='/Payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;