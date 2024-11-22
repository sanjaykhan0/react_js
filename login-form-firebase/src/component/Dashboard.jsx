import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './Dashboard.css';
import { auth, db } from '../../Fireconfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } 
    });
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
          const data = await getDoc(doc(db, "users", user.uid))
          .then(data=>{
          if (data) {
            setUserData(data.data());
          } else {
            console.log("No user data found");
          }
        }) 
      }
      
    };
    fetchUserData();
  }, [user]);

  return (
    <div className='info-hero container'>
      <div className="sec1">
        <font>Hello</font><br />
        <h1>
          Welcome <span style={{ color: 'red',fontSize:"30px" }}>{userData && userData.name}</span> to the Dashboard
        </h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet quas magnam soluta? Eos est molestias alias quibusdam fugit ex.</p>
        <br />
      </div>
      <div className="sec2">
      </div>
    </div>
  );
}
