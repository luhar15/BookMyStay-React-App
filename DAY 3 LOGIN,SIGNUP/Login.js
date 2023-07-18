import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div>
    <div className="login-container">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to ="/">
          <button type="submit">Login</button></Link>
        </form>
        <div className="social-login">
          <p>Or login with:</p>
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
          Don't have an account? <Link to="/Register"><a href="/signup">Sign up</a></Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
