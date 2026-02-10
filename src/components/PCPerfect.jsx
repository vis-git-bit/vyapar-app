import React,{useState} from "react";
import'./PCPerfect.css';

const PCdata=[
    {
      titleone:"Direct Print Compatibility",
      text:"If the customer needs a hard copy of the bill, then our PC version app supports both Regular and Thermal printers. You can instantly give print and our app provides you with 15 themes for regular printers and 5 themes for thermal printers.",
       image:"/print-compatibility.webp" 
    },
      {
         titleone:"Multiple Business Reports",
          text:"Access comprehensive insights with the Vyapar App’s Multiple Business Reports feature. Generate various reports, including sales, expenses, profit & loss, and more. Gain valuable analytics, make informed decisions, and optimize business performance across multiple aspects effortlessly.",
          image:"/multiple reports.webp"
     },
      {
         titleone:"Business Custom Fields",
          text:"If you are looking for specific fields for your business and you won’t find them, no need to worry, our PC billing software allows you to add custom fields as per your business requirements.",
          image:"/custom fields.webp"
     },
      {
         titleone:"Multi-device Sync",
          text:"he multi-device synchronisation feature of our PC billing app allows the devices to sync data effectively. From any location, you can access the data, and it will be updated in real time on various devices. This helps you to increase flexibility, productivity, and teamwork while maintaining businesses in multiple location.",
          image:"/Sync.webp"
     },
      {
         titleone:"WhatsApp Personalization",
          text:"By logging in with your WhatsApp number on the Vyapar desktop billing app, you can send customers personalised invoices, estimates, and payment reminders. With this feature you can improve customer communication and build strong customer relationships.",
          image:"/personalization.webp"
     },
      {
         titleone:"Cash and Bank Management",
          text:"Our application simplifies financial management by giving you full control over cash, bank accounts, cheques, and loans. It enables seamless tracking of transactions, real-time updates, and accurate record-keeping. It even lets you record loan transactions and repayments.",
          image:"/cash.webp"
     },
      {
         titleone:"Stock and Inventory Tracking",
          text:"Efficiently manage stock movements, FIFO, expiry, and near-expiry products with our billing app for PC. Streamline inventory by tracking dump stock and high/low performers. Set reorder points to ensure inventory stays updated and optimize operations seamlessly.",
          image:"/tracking.webp"
     },
      {
         titleone:"Order Management",
          text:"Efficiently manage orders with Vyapar App’s Order Management feature. Streamline the entire order process from creation to fulfillment, ensuring accuracy and customer satisfaction for your business.",
          image:"/older.webp"
     }
]

const Perfect= () =>{
   const [clickBox, setclickBox] = useState(0);

    return(
      <section className="perfect-section">
        <div className="perfect-content">

          <div className="perfect-header">
            <h1>Why Vyapar Billing Software for PC is Perfect for Small Businesses?</h1>
          </div>

          <div className="perfect-main-container">
            <div className="perfect-left-card">
              {PCdata.map((item,index) =>(
                <div 
                className={`perfect-cards ${clickBox === index ? 'active' : ''}`}
                key={index}
                onClick={() => setclickBox(index)}
                >
                  <div className="perfect-title">
                    <h3>{item.titleone}</h3>
                    </div>


                </div>
              ))}
            </div>

            <div className="perfect-right-card">
              <p>{PCdata[clickBox].text}</p>
              <img src={PCdata[clickBox].image} alt="perfect-image"/>
              
            </div>
          </div>


        </div>

      </section>
    
    )
}
export default Perfect;