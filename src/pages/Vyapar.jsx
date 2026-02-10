import React from "react";
import "./Vyapar.css";
import Sec2 from "../components/Sec2";
import ZigZagSection from "../components/ZigZag";
import FeatureSection from "../components/Features";
import BenefitSection from "../components/benefits";
import SmallBusinessSection from "../components/SmallBusiness";
import FAQSection from "../components/FAQ";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Floatingbtn from "../components/FloatingButton";
import Live from "../components/Live";

const Vyapar = () => {

 return (
    <div className="vyapar-container">
  
      {/* Section 1 */}
      <section className="section1">
        <div className="section1-content">
          <div className="section1-text">
            <h1>GST Billing Software for 
              Small Business in india</h1>

            <p>Manage your business professionally with Vyapar, Indias leading small business
              software for billing, inventory, and accounting. Join 1 Cr+ satisfied SMEs in India 
              who trust Vyapar.</p>

            <button className="section1-btn">Download Vyapar Now</button>
          </div>
          <div className="section1-image">
            <img src="/section1-image.webp" alt="1stimg" />
          </div>
        </div>
      </section>

     
    <Sec2 />

        <ZigZagSection />
        <FeatureSection/>
         <BenefitSection/>
         <SmallBusinessSection />
         <FAQSection />
          <Ratings />
           <Footer />
      <Floatingbtn/>
      <Live />
     
      
     
      
      
     
 

    </div>
  )
}

export default Vyapar;