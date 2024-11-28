import React, { useState } from 'react';
import './Contact.css'; // Moved styles to CSS file
import { EarthCanvas } from './canvas';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Simulate form submission
  };

  return (
    <div className='flex flex-wrap justify-center items-center mx-2 lg:mx-28'>
   <div className="left p-10">
    <div className="work xl:mx-60 mx-20  mt-16">
        <font className="text-secondary">My Contact</font>
        <h1 className="text-white text-[40px] font-bold">Contact.</h1>
      </div>
    <div className="form-container">
      {formSubmitted && (
        <div className="success-message">
          Thank you! Your form has been submitted successfully.
        </div>
      )}

      <h1>Contact Form</h1>
      <form id="gdprForm" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
          <div className="error-message" id="nameError">Please enter your full name</div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
          <div className="error-message" id="emailError">Please enter a valid email address</div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <div className="error-message" id="messageError">Please enter your message</div>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="dataConsent" name="dataConsent" required />
          <label htmlFor="dataConsent">
            I consent to having this website store my submitted information.
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Form</button>

        <div className="privacy-notice">
          <p>* Required fields</p>
          <p>
            Your personal data will be used to support your experience throughout this website...
          </p>
        </div>
      </form>
    </div>
   </div>
   

   <div className="right h-[50vh] sm:[60vh] lg:h-[80vh] xl:w-[50%] lg:w-1/2 ">
    <EarthCanvas/>
   </div>
    </div>
  );
};

export default Contact;
