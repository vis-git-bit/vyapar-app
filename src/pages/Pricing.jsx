import React, { useState } from "react";
import PricingData from "../Data/PricingData";
import "./Pricing.css";

function Pricing() {
  const [deviceKey, setDeviceKey] = useState("desktop_mobile");
  const [durationKey, setDurationKey] = useState("1_year");
  const [showCompare, setShowCompare] = useState(false);

  const device = PricingData.devices[deviceKey];
  const silver = device.plans.silver.durations[durationKey];
  const gold = device.plans.gold.durations[durationKey];

  return (

    /*main container*/
    <div className="pricing-container">

        {/*showcompare open hide h2 */}
      {!showCompare && <h2>Plans & Pricing</h2>}

      {/*showcompare open hide dropdown  */}
      {!showCompare && (
        <div className="pricing-dropdown">
          <select
            value={deviceKey}
            onChange={(e) => setDeviceKey(e.target.value)}
          >
            {Object.keys(PricingData.devices).map((key) => (
              <option key={key} value={key}>
                {PricingData.devices[key].name}
              </option>
            ))}
          </select>

          <select
            value={durationKey}
            onChange={(e) => setDurationKey(e.target.value)}
          >
            {Object.keys(device.plans.silver.durations).map((key) => (
              <option key={key} value={key}>
                {device.plans.silver.durations[key].duration_label}
              </option>
            ))}
          </select>
        </div>
      )}


      {/*pricing cards if showcompare then small size */}
      <div className={`pricing-cards ${showCompare ? "small-size" : ""}`}>

        {/* SILVER  if showcompare then small card*/}
        <div
          className={`pricing-card-silver ${showCompare ? "small-card" : ""}`}
        >
            {/*if showcompare = true show this */}
          {showCompare ? (
            <>
              <h3 className="small-title">Silver</h3>
              <h3 className="small-price">₹{silver.discounted_price}</h3>
            </>
          ) : (    //otherwise show this part
            <>
              <h2>Silver</h2>

              <div className="only-pricing">
                <p className="old-price">₹{silver.original_price}</p>
                <h2 className="new-price">₹{silver.discounted_price}</h2>
              </div>

              <p className="monthly">
                Only ₹{silver.monthly_equivalent} per month
              </p>
            </>
          )}

         {/*if showcompare then small-silver-btn otherwise silver-btn */}
          <button
            className={showCompare ? "small-silver-btn" : "silver-btn"}
          >
            Get Vyapar Silver
          </button>

          {/*if showcompare open hide this feature icons */}
          {!showCompare && (
            <>
              <hr />
              <ul>
                {silver.features.map((feature, index) => (
                  <li
                    key={index}
                    className={
                      feature.enabled
                        ? "feature-enabled"
                        : "feature-disabled"
                    }
                  >
                    <span className="feature-icon">
                      {feature.enabled ? "✓" : "✕"}
                    </span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* GOLD  if showcompare then small card */}
        <div
          className={`pricing-card-gold ${showCompare ? "small-card" : ""}`}
        >
            {/*if showcompare = true show this */} 
          {showCompare ? (
            <>
              <h3 className="small-title gold-title">Gold</h3>
              <h3 className="small-price">₹{gold.discounted_price}</h3>
            </>
          ) : (    //otherwise show this part
            <>
              <h2>Gold</h2>

              <div className="only-pricing">
                <p className="old-price">₹{gold.original_price}</p>
                <h2 className="new-price">₹{gold.discounted_price}</h2>
              </div>

              <p className="monthly">
                Only ₹{gold.monthly_equivalent} per month
              </p>
            </>
          )}

           {/*if showcompare then small-gold-btn otherwise gold-btn */}
          <button className={showCompare ? "small-gold-btn" : "gold-btn"}>
            Get Vyapar Gold
          </button>

         
          {/*if showcompare open hide this feature icons */}
          {!showCompare && (
            <>
              <hr />
              <ul>
                {gold.features.map((feature, index) => (
                  <li
                    key={index}
                    className={
                      feature.enabled
                        ? "feature-enabled"
                        : "feature-disabled"
                    }
                  >
                    <span className="feature-icon">
                      {feature.enabled ? "✓" : "✕"}
                    </span>
                    <span className="feature-text">{feature.text}</span>                  
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div> 

      {/*show this compare section if compare-feature btn is clicked */}

      {showCompare && (
        <div className="compare-section">
          <h3>Features</h3>

          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Silver</th>
                <th>Gold</th>
              </tr>
            </thead>
            <tbody>
              {silver.features.map((feature, index) => (
                <tr key={index}>
                  <td>{feature.text}</td>
                  <td>{feature.enabled ? "✓" : "✕"}</td>
                  <td>{gold.features[index]?.enabled ? "✓" : "✕"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
       
       {/*btn for comparing features */}
      <button
        className="compare-btn"
        onClick={() => setShowCompare(!showCompare)}
      >
        {showCompare ? "Back to Plans" : "Compare Features"}
      </button>
    </div>
  );
}

export default Pricing;
