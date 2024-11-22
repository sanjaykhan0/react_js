import React from "react";
import { auth, googleProvider } from "../../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const handlesignin = async () => {
    const result = await signInWithPopup(auth, googleProvider).then((data) => {
      console.log(data);

      navigate("/dashboard", {
        state: {
          name: data.user.displayName || "User",
          photo: data.user.photoURL || "https://via.placeholder.com/150",
          // email:data.user.email
        },
      });
    });
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "20px",
  };

  const logoStyle = {
    width: "50px",
    marginBottom: "20px",
  };

  const inputGroupStyle = {
    marginBottom: "20px",
    textAlign: "left",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    transition: "border-color 0.3s ease",
    marginTop: "6px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "gray", // Google's Blue
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#3367D6", // Darker blue on hover
  };

  const googleIconStyle = {
    marginRight: "10px",
    width: "20px",
    height: "20px",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        {/* Logo Section */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" // You can replace this with your custom logo URL
          alt="Logo"
          style={logoStyle}
        />
        
        <h1 style={titleStyle}>Welcome Back</h1>

        {/* Email Input */}
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" placeholder="Enter your email" style={inputStyle} />
        </div>

        {/* Password Input */}
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input type="password" id="password" placeholder="Enter your password" style={inputStyle} />
        </div>

        {/* Sign In with Google Button */}
        <button
          type="button"
          style={buttonStyle}
          onClick={handlesignin}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" // You can replace this with the Google icon or another custom icon
            alt="Google Logo"
            style={googleIconStyle}
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
