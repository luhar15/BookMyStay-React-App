import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './register.css';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div>
    <div className="signup-container">
      <div className="form-container">
        <h1>Create an Account</h1>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder=" Confirm Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to="/login">
          <button type="submit">Sign Up</button></Link>
        </form>
        <div className="social-signup">
          <p>Or sign up with:</p>
          <div>
            <a href="/auth/google">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="/auth/facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <p>
          Already have an account? <Link to="/login"><a href="/login">Log in</a></Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Register;