import React from "react";
import './Desktop.css';
import Sec2 from "../components/Sec2";
import Best from "../components/BestChoice";
import Billing from "../components/PC-billing";
import Trust from "../components/Trust";
import Flexible from "../components/Flexible";
import BillingManagement from "../components/BillingMnagement";
import Customer from "../components/Customer";
import VideoSection from "../components/VideoSection";
import Perfect from "../components/PCPerfect";
import MoreThan from "../components/MoreThan";
import DesktopFAQ from "../components/DesktopFAQ";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";
import Floatingbtn from "../components/FloatingButton";
import Live from "../components/Live";


const desktop =()=>{
    return(
       <div className="desktop-container">
        <div className="desktop-content">
            <section className="S-1">

                <div className="desktop-image">
                    <img src ="/Billing-systems-3.webp" alt="billing"/>
                </div>
                <div className="text-desktop">
                    <h1>Billing Software for PC</h1>
                </div>

                <div className="anothertext-desktop">
                    <p>Providing you a simple and efficient billing application for your PC to create
                        professional invoices in seconds, track income & expenses easily. Download a free
                        billing software for your PC and enjoy a faster billing experience.
                    </p>
                </div>
                <button className="download-btn">
                        Download Vyapar Now!
                    </button>
                

                
            </section>
<Sec2 />
<Best />
<Billing/>
<Trust /> 
<Flexible />
<BillingManagement />
<Customer />
<VideoSection />
<Perfect />
<MoreThan />
<DesktopFAQ />
<Ratings />
<Footer />
<Floatingbtn/>
<Live /> 

        </div>
       </div>
    )
}
export default desktop;