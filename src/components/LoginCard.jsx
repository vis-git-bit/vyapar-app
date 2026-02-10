import React from "react";
import "./LoginCard.css";

const LoginCard = ({ setIsOpen }) => {
  return (
    <div className="login-overlay">
      <div className="login-sidebar">
        
      
        <button className="close-btn" onClick={() => setIsOpen(null)}>
          ✕
        </button>

        <div className="login-header">
        <h2>Login</h2>
       
          <button
            className="create-btn">
            Create Account
          </button>
       </div>

        <div className="phone-box">
         <input type="text" placeholder="Enter Phone" />
        </div>

      
        <button
          className="email-btn">
          Login using email
        </button>

       
        <button
          className="login-button">
          Login
        </button>

     
        <button
          className="forgot-btn">
          Forgot Password
        </button>

      </div>
    </div>
  );
};

export default LoginCard;
