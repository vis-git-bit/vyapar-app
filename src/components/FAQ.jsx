import React,{useState} from "react";
import "./FAQ.css";


const QA =[
    {
     Question:"What is the GST Bill?",
     Answer:"A GST Bill is simply a tax invoice created by a seller when goods or services are sold under India’s Goods and Services Tax (GST) system. It’s an official document that lists all the important details of a transaction, like the seller’s and buyer’s names, GSTIN numbers, date, invoice number, product or service description, quantity, price, and the GST charged on it."
},
{
     Question:"Which is the best billing software?",
     Answer:"Vyapar app is the best billing software available for SMEs in India. The Vyapar app provides access to a range of useful features. They can make the business management process seamless for business owners.Using our billing tool, you can save a lot of time and effort required in creating GST invoices. You can use automation tools to manage inventory using tracking features. Further, you can create reports using stored data, and much more."
},
{
    Question:"What is billing software?",
    Answer:"Billing software is a tool that helps businesses create bills and invoices quickly without manual work. Instead of writing everything by hand, the software automatically adds item details, calculates totals, taxes, discounts, and records the transaction for future use."
},
{
    Question:"How much does billing software cost?",
    Answer:"You can use Vyapar billing software on Android devices for free anytime. All businesses can get a 7 days free trial with the desktop version. Vyapar billing software only charges for providing access to premium features. You can try premium features for free using trial access in the desktop billing software."
},
{
    Question:"Is there free GST billing software?",
    Answer:"Yes, you can get the best GST billing software by Vyapar for free. You can download the app on Android devices at zero cost and use it for your daily business requirements. You do not need to pay to use the app’s basic features."
},
{
    Question:"Which software is used for GST billing?",
    Answer:"yapar is the best business choice for creating GST bills for customers in India. Over one crore businesses use Vyapar to bill their customers. It is because they trust the Vyapar billing software. Vyapar is the best choice as it comes with a range of useful features that eliminate the requirement to have multiple billing software. It acts as a one stop solution for all business requirements. The best billing solutions make the entire business management process seamless."
}
]



const FAQSection = () =>{
     const [clickLine, setclickLine] = useState(null);

const FAQ = (index) =>{
    if(clickLine === index){
        setclickLine(null);
     } else {
        setclickLine(index);
     }
};

    return(

        <section className="section7">
            <div className="section7-content">

              <div className="first-T">
                <h1>GST Billing Software FAQs</h1>
              </div>
                <div className="FAQ-card">
                {QA.map((item,index) =>(
                    <div className="FAQ-box" key={index}>

                    <div className="FAQ-question"
                      onClick={() => FAQ(index)}>
                        <p>{item.Question}</p>
                      <span className={`faq-arrow ${clickLine === index? "rotate" : ""}`}>▼</span>
                  
                      </div>

                      <div className={`FAQ-answer ${clickLine === index? "open" :""}`}>
                        <p>{item.Answer}</p>
                      </div>
                    </div>
                ))}
                </div>
            
            </div>
        </section>

    )
}

export default FAQSection;