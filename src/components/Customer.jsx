import React from "react";
import { Star } from "lucide-react";
import "./Customer.css";

const Customer = () => {
  const CustomerData = [
    {
      id: 1,
      text: "Vyapar is a low-cost billing software with user user-friendly dashboard and WhatsApp bill message feature is great.",
      name: "Akash",
      role: "(Small Business Owner)",
      source: "Capterra"
    },
    {
      id: 2,
      text: "My most loved feature is SMS and invoice sharing capabilities in one or two clicks. Latest improvement, I was wondering if the customer can make a payment by clicking our invoice!",
      name: "Abdul Kader",
      role: "(Fine Art, Owner)",
      source: "Capterra"
    },
    {
      id: 3,
      text: "Best billing app I have ever seen in the Play Store. I was shocked that they are providing 14 invoice formats. Faster billing, accounting and UI are also good.",
      name: "Sanjay",
      role: "(Food & Beverage Business)",
      source: "Capterra"
    }
  ];

  return (
    <section className="customer-section">
      <div className="customer-container">
        <h1 className="customer-title">
          What Customers are Talking About Vyapar's PC Billing App?
        </h1>

        <div className="customer-grid">
          {CustomerData.map((customers) => (
            <div key={customers.id} className="customer-card">
              <div className="stars">
                <Star fill="#FFD700" color="#FFD700" size={24} />
                <Star fill="#FFD700" color="#FFD700" size={24} />
                <Star fill="#FFD700" color="#FFD700" size={24} />
                <Star fill="#FFD700" color="#FFD700" size={24} />
                <Star fill="#FFD700" color="#FFD700" size={24} />
              </div>

              <p className="customer-text">{customers.text}</p>

              <div className="customer-person">
                <p className="person-name">{customers.name} {customers.role}</p>
                <p className="person-source">Source : {customers.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;