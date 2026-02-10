import React, { useEffect, useState } from "react";
import "./FloatingButton.css";

const Floatingbtn = () => {
  const [ShowBtn, setShowBtn] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset;
    
      if (currentScroll > 600 && currentScroll < 5550) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`btn ${ShowBtn ? "show" : ""}`}>
        Download Vyapar Now
      </div>
    </div>
  );
};

export default Floatingbtn;
