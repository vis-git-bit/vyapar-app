import React from "react";
import'./Footer.css';
import { PhoneCall, MessageCircle } from "lucide-react";


function Footer ()  {
    return (
        <footer id="Footer" className="footer-section" >
          <div className="footer-content">
                
                <div className="img-text">

                    <div className="logo">
                        <img src="/vyapar_logo.svg" alt="logo"/>
                    </div>

                    <div className="line">
                        <p> Billing Accounting & Inventory software for small business owners in India </p>
                    </div>
                </div>

                <div className="footer-details">

                    <div className="products">
                        <h2>Our Products</h2>
                        <p>Vyapar App</p>
                        <p> NeoDove (Telecalling CRM)</p>
                    </div>

                    <div className="Software">
                        <h2>Vyapar Software</h2>
                        <p> Billing Software</p>
                            <p>Accounting Software</p>
                            <p>Inventory Software</p>
                            <p>Invoicing Software</p>
                            <p>Business Management Software</p>
                            <p>More Business Softwares</p>
                    </div>

                    <div className= "Solutions">
                        <h2>Industry Solutions</h2>
                        <p>Retail</p>
                           <p>Grocery</p>
                           <p>Jewellery</p>
                           <p>Pharmacy</p>
                           <p>Restaurant</p>
                           <p>Clothing/Apparel</p> 
                    </div>

                    <div className="tools">
                        <h2>Vyapar Web Applications (Tools)</h2>
                        <p>Logo Maker</p>
                           <p>GST Calculator</p>
                           <p>Invoice Generator</p>
                           <p>Quotation Maker</p>
                           <p>Proforma Invoice Generator</p>
                           <p>Purchase Order Generator</p>
                           <p>Receipt Maker</p>
                           <p>Depreciation Calculator</p>
                           <p>Straight Line Depreciation Calculator</p>
                          <p> QR Code Generator</p>
                     </div>

                     <div className="Formats">
                        <h2>Vyapar Formats</h2>
                        <p>Invoice Formats</p>
                        <p>Quotation Format</p>
                        <p>Balance Sheet Formats</p>
                        <p>BillBook Formats</p>
                        <p>Receipt Formats</p>
                        <p>Credit Note Formats</p> 
                        <p>Debit Note Formats</p>
                        <p>Sales Report Format</p>
                        <p>Estimate Format</p>
                        <p>Delivery Challan Format</p>
                        <p>Cash Flow Statement Format</p>
                        <p>Voucher Formats</p>
                        <p>Work Order Format</p>
                        <p>Reconciliation Format</p>
                        <p>Bill of Exchange</p>
                        <p>Income statement</p>
                     </div>

                     <div className="info">
                        <h2>Contact Info</h2>
                        <h3>Address</h3>
                        <p>GGR Towers -3 18/2B<br />
                           Ambilipura, Village, Varthur hobli<br />
                           Bengaluru, Karnataka 560103</p>

                         <h3>Phone</h3>
                         <p><PhoneCall size={20} color="#22c55e" /> +91-6364-444-752</p>
                          <p> <PhoneCall size={20} color="#22c55e" />  +91-9333-911-911</p>
                           <p> <MessageCircle size={20} color="#22c55e" /> +91-6366-827-420</p>
                             <br/>
                           <p> 09:00 AM - 09:00 PM ( Monday to Saturday )<br/>
                             10:00 AM - 07:00 PM ( Sunday ) </p> 
                           <h3>Email</h3>
                           <p>help@vyaparapp.in</p>
                     </div>
                </div>

                <div className="more-details">
                    <p>GST Registration Number : 29AAZCS9478E1Z7</p>
                    <p>Udyam Registration Number : UDYAM-KR-03-0219719</p>
                </div><hr />

                <div className="TC">
                    <p>Terms and Conditions</p>
                    <p>Copyright © 2026 Simply Vyapar Apps Pvt. Ltd.TM</p>
                </div>
            </div>
       
        </footer>
    )
}
export default Footer;