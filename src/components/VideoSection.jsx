import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-content">
          <div className="video-left">
            <h1 className="video-title">
              Watch How to Create Bills Using Vyapar on Your Laptop or Desktop
            </h1>
            <p className="video-description">
              With Vyapar, creating bills is quick and easy. You can make GST-ready bills in just a few clicks, serve customers faster, get paid sooner, and skip the manual work.
            </p>
          </div>

          <div className="video-right" >
            <video className="demo-video"   controls
                                             muted
                                            playsInline>
              <source src="/video1.mp4" type="video/mp4" />
              
            </video>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;