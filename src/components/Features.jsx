import React, { useState } from 'react';
import './Features.css';

const sectionsData=[
    {
        image:"/share emoji.webp",
        title:"Send Estimate and Quotations",
        headingtext:"Send Estimate and Quotations",
        description:"Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.Vyapar billing software for small businesses provides a professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly."
    },
    {
        image:"/track emoji.webp",
        title:"Track Orders",
        headingtext:"Track Orders",
        description:"Creating sales and purchase orders is easier and faster with our advanced GST Compliant GST Software. It helps set up a due date for tracking orders seamlessly. With this GST Accounting and Billing Software, we get an auto stock adjustment. It helps ensure the availability of inventory items.Having tracking features is pretty helpful for fulfilling orders on time and avoiding unnecessary losses. You can save time with tracking and use it to perform other day to day tasks. It enables better customer satisfaction. You can attach a tax invoice to an order and track if payment is due using the app."
    },
    {
        image:"/Choose theme.webp",
        title:"Choose The Best Theme",
        headingtext:"Choose The Best Theme",
        description:"Maintaining and sharing professional invoices with your clients can improve your brand’s Identity. The GST Billing App has two invoice themes for thermal printers. Also, it has twelve invoice themes for regular printers.With this GST invoice software, you can quickly improve the look of your invoice Using available customisation options is seamless. You can neatly prepare the invoice for your client. Business bills generated can better impress a client."
    },
    {
        image:"/Record expenses.webp",
        title:"Record Business Expenses",
        headingtext:"Record Business Expenses",
        description:"Tracking and recording all expenses in the business is important for accounting and tax filing. It is easier to follow the money spent and create an accurate report with the GST billing software.Our free billing app is an efficient option for recording expenses. Businesses can easily optimise their business expenditure to save more money. With our free GST billing software, you can record both GST and non-GST expenses."
    },
    {
        image:"/Receivable and payable.webp",
        title:"Accounts Receivable and Payables",
        headingtext:"Accounts Receivable and Payables",
        description:"A professional free billing and accounting software lets users keep all the transaction details and track business cash flow seamlessly. Now you have a better way of keeping your transaction details safe.Free GST Invoicing Software allows you to track party-wise receivables and payables. Using the business dashboard in the GST mobile app, you can track the money you have to receive and the money you need to pay in the Vyapar app."
    },
    {
        image:"/Delivery Challan.webp",
        title:"Track Delivery Challan",
        headingtext:"Track Delivery Challan",
        description:"You can ensure your goods have reached customers safely by tracking delivery challans. Our GST billing software helps you track your consignments easily and helps provide instructions if they get misplaced. Our ultimate free GST Invoicing Software helps manage consignor and consignee details seamlessly.You can include the terms and conditions of the order to avoid disputes and bring more clarity to the scope of the order."
    },
    {
        image:"/Bank Account.webp",
        title:"Link Your Bank Accounts",
        headingtext:"Link Your Bank Accounts",
        description:"usinesses can easily add, manage, and track online and offline payments quickly. If they opt for an easy-to-use free GST billing app for mobile, the tasks get easier. Whether your revenue is from the banks or e-wallets, you can seamlessly enter data into the free billing software.You can send or receive money using bank accounts and perform bank-to-bank transfers for seamless cash flow management. So, it is ideal for businesses with all the cash-ins and cash-outs using the Vyapar invoicing app."
    },
    {
        image:"/Business Reports.webp",
        title:"/Create 50+ Business Reports",
        headingtext:"Create 50+ Business Reports",
        description:"Businesses are required to make informed decisions to ensure a consistent growth trajectory. Use 50+ business reports created using our GST billing and accounting software for all your business requirements.Users can easily view and analyse the data instantly using our free GST Invoicing & Accounting Software. You can create graphical reports for tracking sales and expenses using the app. "
    },
 {
    image:"/GST Invoicing.webp",
    title: "GST Invoicing / Billing",
    headingtext:"GST Invoicing / Billing",
    description:"Our all-in-one free GST billing software is an excellent addition to your business as it helps you automate your billing requirements. It is pretty efficient in assisting medium and small enterprises to save more time in accounting.With the help of free billing software with GST, business owners could efficiently perform various tasks, including GST return filing, inventory management, invoicing, and billing. Our free accounting app allows businesses to customise the fields per their unique requirements.You can use the app to generate GST invoices for your clients within 20 seconds and print/share them with customers. Bills are mainly recommended in the GST invoice format, and you can create them using our GST Software for billing."
},
{
    image:"/Automatic data backup.webp",
    title:"Automatic data backup",
    headingtext:"Automatic data backup",
    description:"GST billing & accounting Software is 100% secure, and you can easily store your data accurately. Our free app lets you keep your data secure by creating local, external or online Google Drive backups.You can easily use this GST Invoicing & Accounting Software to recover data quickly. The data is encrypted with added security, and the Vyapar app is an advanced free invoicing & accounting software.Vyapar GST billing software in India comes with a hassle-free backup system with the “auto-backup” feature. After activating this mode on the Vyapar app, an automatic backup is created every day, so getting all your data backup is easier, so you would not lose anything."
}
];

const FeatureSection = () => {
  const [clickCard, setclickCard] = useState(0);

  return(
    

      <section className="section4">
            <div className="section4-content">
                <div className="header">
                    <h1>Features of GST Billing and Accounting Software</h1>
                </div>

                <div className="main-container">
                    <div className="left-card">
                        {sectionsData.map((item, index) => (
                            <div 
                                className={`cards ${clickCard === index ? 'active' : ''}`}
                                
                                key={index}
                                onClick={() => setclickCard(index)}
                            >
                                <div className="image">
                                    <img src={item.image} alt="cards image" />
                                </div>

                                <div className="text">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="right-side">
                        <h3>{sectionsData[clickCard].headingtext}</h3>
                        <p>{sectionsData[clickCard].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default FeatureSection;