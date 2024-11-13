import React from 'react';
import './App.css';

export function SignIn() {
  return (
    <div className="container">
    <div className="form-container sign-in" >
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fa fa-github"></i></a>
          <a href="#" className="icon"><i className="fa fa-linkedin-in"></i></a>
        </div>
        <span>or use your email password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot Your Password?</a>
        <button type="button">Sign In</button>
      </form>
    </div>
    </div>
  );
}
