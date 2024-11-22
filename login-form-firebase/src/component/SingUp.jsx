import React, { useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Fireconfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  let navigate = useNavigate()

  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  let handlesignUp = (e)=>{
e.preventDefault()
    if(name&&number&&email&&password){
      createUserWithEmailAndPassword(auth,email,password)
      .then(data=>{
        console.log(data);
        setDoc(doc(db,"users",data.user.uid),{
          name,email,number
         })
        
      })
    }
    navigate("/")

  }

  return (
    // <div className="container" style={}>
    <div className="form-container sign-up" >
      <form onSubmit={handlesignUp}>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fa fa-github"></i></a>
          <a href="#" className="icon"><i className="fa fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Number" onChange={(e)=>setNumber(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" >SignUp</button>
      </form>
    </div>
    // </div>
  );
}
