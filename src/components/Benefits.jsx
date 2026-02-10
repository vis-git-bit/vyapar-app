import React,{useState} from 'react';
import './Benefits.css';

const sectionsData=[
{
 id:1,
 img:"/basic-usage.webp",
 title:"Lifetime free basic usage",
 text:"Using our free GST accounting and billing mobile app, you can seamlessly create custom invoices. Further, you can manage your dashboard and track inventory items. The free access provides you use of many other useful features.We have kept all essential features of our computerized accounting tool accessible for free. The free features are available for lifetime for Android mobile users.Our aim behind free access is to include millions of small business owners in the digital economy. Lifetime free access to mobile devices makes our invoicing tool the best fit for SMEs."
},
{
  id:2,
  img:"/business-status.webp",
  title:"Track your business status",
  text:"Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.With free GST billing software and invoicing tools, you can manage your business using a mobile. Accounting in your business becomes quite simple and efficient with this free software. As all data is stored during invoicing."
},
{
  id:3,
  img:"/cashflow.webp",
  title:"Manage cashflow seamlessly",
  text:"GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features. Cashflow management is widely used for its billing, accounting, and many other business requirements.The billing software by Vyapar helps automate management. It is done to prevent mistakes in accounting. By investing in this billing software, you can manage your business cash flow effortlessly. This all-in-one software makes managing cash transactions possible. It comes with features like bank withdrawals and deposits tracking."
},
{
  id:4,
  img:"/GST billing.webp",
  title:"Online/Offline GST billing",
  text:"Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing features in the app to generate bills.Using our billing software features, you need not stop your business operations when there is weak internet connectivity. The Vyapar app helps you generate invoices for your customers without requiring you to stay online. The online and offline features of the Vyapar app are advantageous in rural areas where connectivity and network issues often appear."
},

{
   id:5,
   img:"/payment-options.webp",
  title:"Provide multiple payment options",
   text:"Your customers are less likely to default on the payments if you provide multiple payment options for convenience. You can provide choices like UPI, QR, NEFT, IMPS, e-wallet, and credit/debit cards.Convenience is vital for customers; the biggest comfort you can provide is allowing them to choose how they pay you. Using the Vyapar invoicing app, you can create invoices that include multiple payment options."
 },
 {
   id:6,
   img:"backups.webp",
   title:"Keep data safe with backups",
   text:"Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app. For additional safety, you can create a local backup too.Keeping data safe is the utmost priority of any business today, as data is the backbone of a business. You can generate reports and analyse the sales information for future growth prospects using your sales data"
 },
 {
   id:7,
   img:"brand-image.webp",
   title:"Build a positive brand image",
   text:"Providing professional quotes and estimates during negotiation builds a positive brand image. Further, you can provide complete disclosure about the deal to build trust.Vyapar GST billing software helps build a professional brand for you. A professionally built custom invoice can stand out among competitors and showcase yourself as a professional seller.You can include our business logo, style, font, and brand colours in your invoice, as it will help you present your brand’s identity perfectly. A buyer is more likely to buy from a seller using professional custom quotation formats than plain text."
 },
 {
   id:8,
   img:"/inventory.webp",
   title:"Track your business inventory",
   text:"Using our GST billing software, you can keep track of available items in your store. It can help you set up low inventory alerts to place advance orders and detect possible theft.nventory management is crucial for businesses with a wide variety of items, and our free billing software helps in such cases. Using our inventory software, you can keep track of available items in your store.A professional inventory management tool can help you perfectly manage items in your warehouse. It can help you organise your stock space as per the customer demands. You can save space by eliminating the things you no longer need in your store."
 }
 ]


const BenefitSection = () => {
  const[openId, setOpenId] = useState(null)

  const click = (id) =>{
    setOpenId (openId === id? null : id);
  };

  const showText = (text, id ) => {
    const words = text.split("");
    return openId === id ? text: words.slice(0, 80).join("") + "..."
  };

  return(
    <section className="section5">
        
            <div className="main-header">
                <h1>Top 8 Benefits of GST Billing Software</h1>
            </div>
            <div className="section5-content">

            <div className="left-part">
               {sectionsData.slice (0,4).map((item) => (
                <div className= "card" key = {item.id}> 

                <div className="left-img">
                <img src = {item.img} alt = ""/>
                </div>
                
                <div className = "title-text">
                
                <h2>{item.title}</h2>
               
                
                <p>{showText(item.text , item.id)}</p>
           
           <div className="toggle">
            <span onClick={() => click (item.id)}>
            {openId === item.id ? "-Read less" : "+Read more"}
             </span>  
             </div>
             </div>   
                
                </div>
               ))}
            </div>

            <div className="middle-img">
                <img src="/2 phones.webp" alt="middle"/>
           </div>

           <div className="last-part">
            {sectionsData.slice(4).map((item) =>(
              <div className ="card" key = {item.id}>

                <div className="last-img">
                <img src= {item.img} alt=""/>
                </div>


                <div className="titletext">
                
                <h2>{item.title}</h2>
             
                
              <p>{showText(item.text , item.id)}</p>
               
          <div className="toggle">
           <span onClick={() => click (item.id)}>
            {openId === item.id ? "-Read less" : "+Read more"}
             </span>  
             </div>   
             </div>
                
                </div>
               ))}
            </div>
          
           
</div>
    </section>
  )
}

export default BenefitSection;
