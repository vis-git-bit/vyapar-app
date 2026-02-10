import React, { useState } from "react";
import './Flexible.css';
import DesktopPlans from "../Data/DesktopPlans";
import MobilePlans from "../Data/MobilePlans";

function Flexible () {

    {/*for tracking which device is active */}
    const [ClickPlans , setClickPlans] = useState ("desktop");

     {/*if desktop selected show desktopdata otherwise show mobiledata*/}
    const plans = ClickPlans === "desktop" ? DesktopPlans : MobilePlans;

     return(
      //main container of plans
        <div className="plan-container">
              
              {/*header of plan sections*/}
            <h2>Flexible Pricing for Every Stage of Your Business</h2>
            <p>We offer plans that match your needs. Pay only for the plan that helps you grow.</p>

            {/*buttons for devices*/}
            <div className="device-buttons">
                {/*if desktop selected add active otherwise nothing*/}
                <button className={ClickPlans === "desktop" ? "active" :""}

                //when clicked change state to desktop
                onClick={ () => setClickPlans ("desktop")}>Desktop</button>

                  {/*if mobile selected add active otherwise nothing*/}
                <button className={ClickPlans === "mobile" ? "active" :""}

                //when clicked change state to mobile
                onClick={ () => setClickPlans ("mobile")}>Mobile</button>
            </div>

            <div className="cards-plans-container">
              {/* loops through plan data */}
              {plans.map((plan,index) => (
                     <div key={index} className="plan-card">
                           {/* for name */}
                        <h3>{plan.planName}</h3>
                         {/* for plan prices */}
                        <p className="plan-price"> 
                             <span className="price-amount">₹{plan.pricePerMonth}</span>
                             <span className="price-period"> / month</span>
                        </p>
                          {/* for ideal */}
                        <p className="plan-ideal">{plan.idealFor}</p>
                        <hr/>
                           {/* for features */}
                        <ul>
                            {plan.features.map((feature,index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <button className="trial-btn">
                            Start Trial
                        </button>
                     </div>
              ))}
            </div>
        </div>
     )

}
export default Flexible;
