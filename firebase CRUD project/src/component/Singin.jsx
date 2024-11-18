import React, { useState } from 'react';
import './App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Fireconfig';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export function SignIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  let navigate = useNavigate()
  let handleSignin = ()=>{
    if(email && password){
    signInWithEmailAndPassword(auth,email,password)
      .then(user=>{
        navigate("/dashboard")
      })
    }

  }


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
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <a href="#">Forgot Your Password?</a>
        <button type="button" onClick={handleSignin}>Sign In</button>
      </form>
    </div>
    </div>
  );
}
