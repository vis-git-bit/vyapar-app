import React from "react";
import "./MoreThan.css";

const MoreThan = () => {
  const Advantages = [
    {
      id: 1,
      icon: "/best.webp",
      title: "Best Accounting Management",
      description: "By automating expense tracking, producing financial reports, controlling GST, and streamlining cash flow, Vyapar provides the best accounting management, assisting businesses in maintaining compliance and financial organisation."
     }, {
      id: 2,
      icon: "/stock.webp",
      title: "Track Your Stock Easily ",
      description: "Your inventory and billing are directly connected with Vyapar.  Your stock levels are automatically updated each time you create an invoice."
    },
    {
      id: 3,
      icon: "/center.webp",
      title: "Your Business Command Center ",
      description: "Billing manages incoming funds, but understanding outgoing funds is the key to real financial clarity. "
    },
    {
      id: 4,
      icon: "/health.webp",
      title: "Check Business Health in Real Time",
      description: "Consider the Vyapar desktop app as your business dashboard rather than just another application just to generating an invoice. "
    },
    {
      id: 5,
      icon: "/relation.webp",
      title: "Manage Your Business Relationship",
      description: "You can manage all of your “parties” in one location with Vyapar, including suppliers and customers.  "
    },
    {
      id: 6,
      icon: "/marketing.webp",
      title: "Do Smart Marketing",
      description: "By sending festive greetings, customised offers, and targeted campaigns via Smart Ad Connect on WhatsApp, Vyapar’s marketing tool helps businesses increase sales and improve customer engagement."
    }
  ];

  return (
    <section className="morethan-section">
      <div className="morethan-container">
        <h1 className="morethan-title">
          Easy Management of All Billing Process on Your Computer
        </h1>

        <div className="more-grid">
          {Advantages.map((advantage) => (
            <div key={advantage.id} className="more-card">
              <div className="more-icon">
                <img src={advantage.icon} alt={advantage.title} />
              </div>
              <h3 className="more-title">{advantage.title}</h3>
              <p className="more-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThan;