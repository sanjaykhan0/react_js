import React, { useEffect, useRef, useState } from "react";
import "./Video.css";

export default function Video() {
  const videoref = useRef();
  const [mystyle, setMystyle] = useState({ display: "none" });
  const [mybtn, setBtn] = useState({ display: "block" });
  const [mystyl, setMystyl] = useState({ display: "none" });
  const [mysty, setMysty] = useState({ display: "none" });

  const input1 = useRef();
  const input2 = useRef();

  const handleplay = () => {
    setTimeout(() => {
      videoref.current.play();
    }, 1000);
    setMystyle({ display: "block" });
    setTimeout(() => {
      setMystyl({ display: "block" });
    }, 6000);
    setTimeout(() => {
      setMysty({ display: "block" });
    }, 6200);
    setBtn({ display: "none" });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const one1 = input1.current.value;
    const one2 = input2.current.value;
    console.log("Email:", one1);
    console.log("Password:", one2);
    alert("Email : "+one1 +"\n"+
      "Password : "+one2
    )
  };

  return (
    <div>
      <button onClick={handleplay} style={mybtn}>
        form
      </button>

      <div className="container" style={mystyle}>
        <video style={{ height: "100%", width: "100%" }} ref={videoref}>
          <source src="/vn.mp4" />
        </video>
        <div className="formy" style={mystyl}>
          <div className="container mini">
            <form onSubmit={handlesubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <input type="email" placeholder="Email" ref={input1} />
                <i className="bx bx-envelope"></i>
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" ref={input2} />
                <i className="bx bx-lock-alt"></i>
              </div>
              <div className="remember">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button className="btn">Login</button>
              <div className="register">
                <p>
                  Don't have an account? <br /> <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
