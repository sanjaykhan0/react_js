import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({data}) {
  const [videostyle, setVideostyle] = useState({});
  const [product, setProduct] = useState({ display: "none" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideostyle({
        width: "120%",
        height: "100%",
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "10",
      });
      setProduct({ display: "block" });
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  let handlevideo = ()=>{
    setVideostyle({
      width: "120%",
      height: "100%",
      display: "none",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "10",
    });
    setProduct({ display: "block" });

  }

  return (
    <div>
      <nav style={{ width: "10%", height: "80vh", float: "left" ,paddingLeft: "20px",position: "relative" }}>
        <div></div>
        <span style={{height: "100%", width: "100%", position: "absolute", top: "0", left: "0" ,zIndex: "100"}}>

        <h1 >home</h1> <br />
        <Link to={"/Create"}>create</Link> &nbsp;&nbsp;<br /><br /> 
        <Link to={"/Update"}>Update</Link>&nbsp;&nbsp;<br /> <br />
        <Link to={"/Delete"}>Delete</Link>&nbsp;&nbsp;<br /><br />
        <button onClick={handlevideo}>Skip</button>
        </span>
        
      </nav>

      <video style={videostyle} autoPlay muted>
        <source src="home.mp4" type="video/mp4" />
      </video>

      <div className="product" style={product}>
        <div style={{ padding: "20px", overflowY: "auto", height: "100%" }}>
          <h2 style={{ marginBottom: "20px", color: "#333" }}>User Data</h2>
          {
            data &&  data.map((item , index) => (
            <div key={index} style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "15px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px', fontWeight: 'bold' }}>Id : {item.id}</h2>
              <h3 style={{ marginBottom: "10px", color: "#007bff" }}>{item.name}</h3>
              <p style={{ margin: "5px 0", color: "#555" }}><strong>Email:</strong> {item.email}</p>
              <p style={{ margin: "5px 0", color: "#555" }}><strong>Phone:</strong> {item.phone}</p>
              <p style={{ margin: "5px 0", color: "#555" }}><strong>Address:</strong> {item.address}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
