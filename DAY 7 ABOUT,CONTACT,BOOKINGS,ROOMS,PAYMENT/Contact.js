import React, { useState } from 'react';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from "./Header";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
        <Header/>
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+91 8056 500 189</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>727721eucs114@skcet.ac.in</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Sri Krishna College Of Engineering And Technology, Coimbatore, TamilNadu.</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactPage;