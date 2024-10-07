import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const [videostyle, setVideostyle] = useState({
    width: "100%",
    height: "100%",
    display: "none",
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name is required");
    } else if (!age) {
      alert("Age is required");
    } else if (!message) {
      alert("Message is required");
    } else {
      // If all fields are filled, update the state
      setName(name);
      setAge(age);
      setMessage(message);
    }

    let timer;
    let navigateTimer;

    if (name && age && message ) {
      timer = setTimeout(() => {
        setVideostyle({ 
          width: "120%",
          height: "100%",
          display: "block",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "10",
        });
      }, 2000);

      navigateTimer = setTimeout(() => {
        navigate("/");
      }, 8000);
 
    }
    else{
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    }

   
  };

  return (
    <div>
      <h1>Create</h1>
      <Link to={"/"}>Home</Link>&nbsp;&nbsp;
      <Link to={"/Update"}>Update</Link>&nbsp;&nbsp;
      <Link to={"/Delete"}>Delete</Link>&nbsp;&nbsp;
      <form
        className="create-form"
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="age"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="form-control"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-control"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <video style={videostyle} autoPlay muted>
        <source src="shipping.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
