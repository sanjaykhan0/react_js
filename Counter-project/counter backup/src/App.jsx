import React, { useEffect, useState } from "react";
import Canvass from "./Canvass";
import "./Dot.css";
// import Hero from "./Componant/Hero";
export default function App() {
  // State to manage visibility of the Canvass component
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div>
      {/* Conditionally render the Canvass component based on isVisible */}
      {isVisible && (
        <div style={{ height: "100vh", width: "100%" }}>
          <Canvass />
        </div>
      )}

      <button
        style={{ backgroundColor: "white", padding: "10px 50px" }}
        onClick={toggleVisibility}
      >
        Click
      </button>

      {/* <Hero/> */}
     
    </div>
  );
}
