import React from "react";
import "./BillingManagement.css";

const BillingManagement = () => {
  const features = [
    {
      id: 1,
      icon: "/capability.webp",
      title: "Offline Billing Capability",
      description: "By enabling offline billing, Vyapar enables companies to generate invoices without internet access and synchronise them later with ease."
    },
    {
      id: 2,
      icon: "/generation.webp",
      title: "Estimate & Quotation Generation",
      description: "Before you make a final billing, Vyapar enables companies to quickly generate and share estimates and quotations."
    },
    {
      id: 3,
      icon: "/E-way.png",
      title: "E-Invoicing & E-Way Bill",
      description: "Creates GST-compliant e-invoices and e-way bills to guarantee error-free tax filing and transportation."
    },
    {
      id: 4,
      icon: "/access.png",
      title: "Multi-User Access",
      description: "Allows you to give more users role-based access so they can effectively manage reports, inventory, and billing."
    },
    {
      id: 5,
      icon: "/OCR.webp",
      title: "OCR Scanner",
      description: "With OCR tool, save time and effort by quickly scanning and extracting text from documents, such as bills and receipts."
    },
    {
      id: 6,
      icon: "/loyalty.png",
      title: "Loyalty Points & Discounts",
      description: "Offer loyalty points and discounts for regular customers to encourage them to do more business."
    }
  ];

  return (
    <section className="billing-management-section">
      <div className="billing-management-container">
        <h1 className="billing-management-title">
          Easy Management of All Billing Process on Your Computer
        </h1>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingManagement;