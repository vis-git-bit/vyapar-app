import React, { useState } from "react";
import "./PC-billing.css";

const billingData = [
  {
    id: 1,
    image: "/gst_invoicing.webp",
    billingtext:
      "Generate accurate bills with HSN/SAC codes, tax breakdowns, and invoice numbers, ensuring full compliance.",
    tag: "Tax Invoicing",
  },
  {
    id: 2,
    image: "/Custom-billing.webp",
    billingtext:
      "Bring your brand closer to customers by customizing bills with ready-built templates.",
    tag: "Customize your Bill",
  },
  {
    id: 3,
    image: "/Multi-Payment-Modes.webp",
    billingtext:
      "Help customers pay off with their choice – via cash, UPI, bank transfers, or split payments.",
    tag: "Easy Payment Modes",
  },
];

const Billing = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const selectedBilling = billingData.find(
    (item) => item.id === selectedTab
  );

  return (
    <section className="billing-section">
      <div className="billing-content">
        <h1 className="billing-header">
          Essential PC Billing Software Features for Indian Small Businesses
        </h1>

   
        <div className="billing-tabs">
          {billingData.map((item) => (
            <button
              key={item.id}
              className={
                selectedTab === item.id
                  ? "tab-button active"
                  : "tab-button"
              }
              onClick={() => setSelectedTab(item.id)}
            >
              {item.tag}
            </button>
          ))}
        </div>

      
        <div className="billing-display">
          <div className="billing-center">
            <img
              src={selectedBilling.image}
              alt={selectedBilling.tag}
              className="billing-image"
            />
          </div>

          <div className="billing-right">
            <p>{selectedBilling.billingtext}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
