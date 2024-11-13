import React from 'react';
import './App.css';

export function SignUp() {
  return (
    // <div className="container" style={}>
    <div className="form-container sign-up" >
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fa fa-github"></i></a>
          <a href="#" className="icon"><i className="fa fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">SignUp</button>
      </form>
    </div>
    // </div>
  );
}
