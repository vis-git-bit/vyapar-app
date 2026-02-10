import React from "react";
import "./Trust.css";

const Trust = () => {
  return (
    <section className="compatibility-section">
      <div className="compatibility-container">

        <div className="trust-card">

         
          <h1 className="compatibility-title">
            We Focus on Universal Desktop Compatibility & Trust
          </h1>

          <div className="trust-row">
            <div className="trust-text">
              <h2 className="trust-heading">Works on Windows</h2>
              <ul className="trust-list">
                <li>Vyapar works perfectly on all major Windows versions like 7, 8, 10, and 11.</li>
                <li>It runs smoothly even on low-spec desktop or laptop systems.</li>
                <li>Regular updates keep it compatible with the latest Windows features.</li>
              </ul>
              <button className="explore-button">Explore Windows </button>
            </div>

            <div className="trust-image">
              <img
                src="/Laptop.webp"
                alt="Windows Laptop"
                className="platform-image1"
              />
            </div>
          </div>

      
          <div className="trust-row">
            <div className="trust-image">
              <img
                src="/MacBook-1.webp"
                alt="Mac Laptop"
                className="platform-image2"
              />
            </div>

            <div className="trust-text">
              <h2 className="trust-heading">Works on Mac</h2>
              <ul className="trust-list">
                <li>Vyapar is compatible with Mac devices and offers easy installation.</li>
                <li>All supported feature access ensures smooth usage across macOS versions.</li>
                <li>Ideal for Mac users who prefer working online with real-time data sync.</li>
              </ul>
              <button className="explore-button">Explore Mac Version</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
