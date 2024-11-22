import React, { useState } from 'react';
import { SignIn } from './Singin';
import { SignUp } from './SingUp';

function Toggle() {
  const [togStyle, setTogStyle] = useState({
    position: 'absolute',
    top: 0,
    left: '0%',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'all 0.6s ease-in-out',
    borderRadius: '0px 150px 100px 0px',
    zIndex: 1000,
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handlesignup = () => {
    
    setIsSignUp(!isSignUp);
    if(isSignUp){
      setTogStyle({
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.6s ease-in-out',
        borderRadius: '150px 0 0 100px',
        zIndex: 1000,
      });
      setButtons("Sign In")

    } else {
      setTogStyle({
        position: 'absolute',
        top: 0,
        left: '0%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        transition: 'all 0.6s ease-in-out',
        borderRadius: '0px 150px 100px 0px',
        zIndex: 1000,
      });
      setButtons("Sign Up")

    }
  };
  const [buttons, setButtons] = useState("Sign Up");

  return (
    <div className="container">
      <div className="toggle-container" style={togStyle}>
        <div className="toggle">
        
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={()=>handlesignup()}>{buttons}</button>
          </div>
        </div>
      </div>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default Toggle;
