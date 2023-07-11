import React from 'react';
import { useState } from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    }
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmpasswordChange = (event) => {
      setConfirmpassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Mobile No:', mobile);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmpassword);
    };
    
    return (
        <div className='page'>
            <div className='border'style={{marginTop:"140px",marginLeft:"600px"}}>
        <div className='login-container'>
        <h1 id='log'>BookMyStay</h1>
        <p id='signup'>Already have an account? <Link to='/'>Log in</Link></p>
        <div className='main'>
        <div id="fb">
            <a href='#'>
            <FontAwesomeIcon icon={faFacebook} />
            {/* <p>Sign in with Facebook</p> */}
            </a>
        </div>
        <div id="go">
            <a href='#'>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" height={30}/>
            {/* <p>Sign in with Google</p> */}
            </a>
        </div>
        <div className="line">
        <span style ={{color : 'black'}}>or Sign up using your email</span>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
            <input id='mobileno' type="text"  placeholder="Username" value={name} onChange={handleNameChange} style={{ color: 'white' }} required/>
          </div>
          <div>
          <input id='email' type="email" placeholder="Email" value={email} onChange={handleEmailChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='mobileno' type="text"  placeholder="Mobile Number" value={mobile} onChange={handleMobileChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='password' type="password"  placeholder="Password" value={password} onChange={handlePasswordChange} style={{ color: 'white' }} required/>
          </div>
          <div>
            <input id='password' type="password" placeholder="Confirm Password" value={confirmpassword} onChange={handleConfirmpasswordChange} style={{ color: 'white' }} required/>
          </div>
          <Link to='/'><button id='login' type="submit">Sign up</button></Link>
        </form>
        </div>
        </div>
      </div>
      </div>
    );
  };

  export default Register ;