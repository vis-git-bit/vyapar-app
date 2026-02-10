import React from "react";
import "./MobileApp.css";

const app = ({ setIsOpen }) =>{
  
    return(
        <div className ="app-card">
          
            <div className="card-details">
                <span className="close-btn" onClick={() => setIsOpen (null)}>✖️</span>

                <img src="QR code.webp" alt="qr-code"/>
                 <h1>Scan with your mobile camera</h1>
                 <p>Monitor your business activity from anywhere in the world, sync mobile app with desktop app.</p>
                 <input type ="text" placeholder="Enter Mobile Number"></input>
                 <button>Get the App </button>

            </div>

            
        </div>

    )
}
export default app;