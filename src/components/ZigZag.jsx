import React, { useState } from 'react';
import './ZigZag.css';

const sectionsData = [
  {
    image: "/section3-img1.webp",
    title: "Create GST Bills online and share them with customers",
    text: "Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool helps establish a professional brand image with its essential online GST billing features. You can utilize the Vyapar accounting and billing app to draft invoices, ensuring adherence to Goods and Services Tax regulations in India.The Vyapar app minimizes accounting mistakes and safeguards your business data. With just a few simple steps, you can create GST invoices using the app’s templates. Additionally, the Vyapar app can be accessed both online and offline, making it convenient for small and medium enterprises to follow optimal accounting practices and streamline their bookkeeping processes."
  },
  {
    image: "/section3-img2.webp",
    title: "Manage Small Business Inventory Seamlessly",
    text: "Vyapar brings the finest inventory management software with incredibly effective features. It helps improve business performance. Using the Vyapar app features like business reports, you can track your business sales. It will help you understand how effectively you have managed your inventory.As the best GST billing software, Vyapar keeps a record of business data within the app. It makes it hassle-free for business owners to create an effective strategy. Using inventory tracking features helps maximise the utility of inventory space."
  },
  {
    image: "/section3-img3.webp",
    title: "Send Payment Reminders to Recover Dues",
    text: "Vyapar's free accounting and billing software assists small and medium-sized enterprises (SMEs) in securing prompt payments and managing their cash flow effectively. The platform enables users to monitor all outstanding payments directly from the business dashboard. To help your customers pay on time, the best GST billing software by Vyapar comes with a wide range of payment options. It includes cash, credit cards, debit cards, e-wallets, NEFT, RTGS, UPI, QR code, and much more. By providing a range of cash and online payment options, you can provide convenience to customers. It ensures that your customers can pay using the option they see fit for themselves. Many small and medium business owners have reduced payment delays with the Vyapar billing software's payment reminder feature. The app features collectively to ensure that the dues do not impact the business's cash flow. You can create reports to adjust your business plans according to the available cash flow. Using the Vyapar billing software is such an easy task. Many business owners rely solely on our small business inventory management software for all their inventory, invoicing, and accounting needs. Customers consider Vyapar as the best GST billing software for small businesses. The app features make it useful for their business. It eliminates the requirement for multiple apps."
  },
  {
    image:"/section3-img4.webp",
    title:"GST filing made simpler and faster",
    text:"Filing GST can be a difficult task for entrepreneurs, often requiring a lengthy manual process. However, with Vyapar GST billing software, generating GST reports becomes effortless, streamlining the entire filing procedure.Many business owners dedicate considerable time and energy each month to ensure compliance with tax regulations, which involves monitoring their invoices, expenses, and accounting records. Additionally, they need to manually input this data to submit their GST returns."
  }
];

const ZigZagSection = () => {
  const [readMoreIndex, setReadMoreIndex] = useState(null);

  return (
    <>
      {sectionsData.map((item, index) => (
        <section className="section3" key={index}>
          <div className="section3-content">
            <div className={`section3-full ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="section3-image">
                <img src={item.image} alt="section" />
              </div>
               
              
              <div className="section3-text">
                <h2>{item.title}</h2>
            
                <p className="section3-description">
                  
                  {readMoreIndex === index ? item.text : item.text.slice(0, 100) + "..."}
                </p>

                <span
                  className="read-toggle"
                  onClick={() =>
                    setReadMoreIndex(
                      readMoreIndex === index ? null : index
                    )
                  }
                >
                  {readMoreIndex === index ? " -Read less" : " +Read more"}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ZigZagSection;