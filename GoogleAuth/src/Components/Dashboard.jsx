import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const [timeOfDay, setTimeOfDay] = useState("");
  const navigate = useNavigate()

  // Function to set greeting based on the time of day
  const getTimeOfDayGreeting = () => {
    const hours = new Date().getHours();
    
    if (hours < 12) { return "Good Morning"; }
    if (hours < 18) { return "Good Afternoon"; }
    { return "Good Evening"; }
  };

  useEffect(() => {
    setTimeOfDay(getTimeOfDayGreeting());
  }, []);

  const handleLogout = () => {
    // For now, log out by just redirecting or clearing the state.
    alert("Logged out!");
    navigate("/")
  
    // Here you would handle actual logout logic, like clearing auth tokens or redirecting.
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #72c2f4, #0091ea)",
      fontFamily: "'Roboto', sans-serif",
      overflow: "hidden",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 6px 30px rgba(0, 0, 0, 0.1)",
        maxWidth: "750px",
        width: "100%",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
        transform: "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}>
        <h1 style={{
          fontSize: "36px",
          color: "#333",
          marginBottom: "20px",
          fontWeight: "600",
        }}>
          {timeOfDay} <br /> Welcome to Your Dashboard!
        </h1>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
          opacity: 0.9,
        }}>
          <img
            src={ location.state?.photo}
            alt="User"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
              border: "5px solid #fff",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          />
          <h2 style={{
            fontSize: "28px",
            color: "#444",
            marginBottom: "10px",
          }}>
            {location.state.name ? `Hello, ${location.state.name}!` : "Hello, User!"}
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque dicta cupiditate repudiandae perspiciatis ex repellendus voluptatum, laudantium esse omnis a autem fuga itaque quae ducimus deleniti temporibus, animi quo!</p>
        
         
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#00c6ff",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "30px",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#00b0cc";
            e.target.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#00c6ff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
