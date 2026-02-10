import React from 'react'
import './AboutUs.css';
import "./aboutrus.responsive.css";
import Ratings from "../components/Ratings";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="us-content">

        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <img src="/desktop-hero.webp" alt="Desktop Interface" className="desktop-hero-img" />
              <div className="hero-text-content">
                <h1 className="hero-title">GST Billing App</h1>
                <button className="hero-btn">Download For Desktop</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mobile-section">
          <div className="mobile-container">
            <div className="mobile-image">
              <img src="/mobile-hand.webp" alt="Mobile App" className="mobile-hand-img" />
            </div>
            <div className="mobile-text-content">
              <p>
                Vyapar is a FREE Business Accounting Software built for Indian small businesses to deal with invoicing,
                inventory, accounting needs, and much more! The goal is to make a businessman's daily routine less
                tiring and let them focus more on growing their business, less on paperwork.
              </p>
            </div>
          </div>
        </section>

         <section className="sec-1">
          <h1>Adopt Right Technology for your Business</h1>

          <div className="container-for-us">
            <div className="card1">
              <div className="image-wrapper">
                <img src="/download.webp" alt="download"/>
              </div>
              <p className="DL">Downloads</p> 
              <p className="value">10M+</p>
            </div>

            <div className="card2">
              <div className="image-wrapper">
                <img src="/rating.webp" alt="rating"/>
              </div>
              <p className="PSR">Play Store Ratings</p>
              <p className="value">4.7 out of 5 stars</p>
            </div>

            <div className="card3">
              <div className="image-wrapper">
                <img src="/indian-product.webp" alt="indian"/>
              </div>
              <p className="MI">Made in</p>
              <p className="value">India</p>
            </div>
          </div>
        </section>

        <section className="sec-2">
          <div className="sme-container">
            <div className="cardSME">
            <div className="sme-image">
              <img src="/SME.webp" alt="Small Business Accounting" />
            </div>
            
            <div className="sme-text">
              <h2>Small/Medium Business (SME)</h2>
              <p>
                Even today, 70% SMEs in India still create bills on paper. Being that, most of 
                their productive time is consumed in making manual entries and calculations. When small 
                things go wrong, the entire business goes down, simply because there is no place to fall back. 
                Not having the resources can really wear out the business owner driving them away from doing 
                what matters most. Small Business Accounting Software needs a Digital Upgrade.
                An upgrade that is simple yet efficient. We are trying to bring in a simpler solution that works 
                for them and hence VYAPAR!
              </p>
            </div>
            </div>
          </div>
        </section>

          <section className="sec-3">
          <div className="founder-container">
            <div className="cardfounder">
           
            <div className="founder-text">
            
              <p>
              “We are talking about improving the life of a segment that is the largest in our nation,
               i.e ‘Small Business Sector’ the heartbeat of our economy. One of the major aspect
                holding down the small and medium enterprise (SME) sector is that they hardly have 
                any access to proper technology. Easing this situation will go a long way in nurturing
                 and sustaining SMEs. To let India emerge as one of the brightest economic spots in 
                 the coming years, businesses should focus on ways to make cash rather than stuck
                  up in counting cash. Vyapar basically helps them do business accounting easier with 
                  the modern digital way!”
              </p>
            </div>

             <div className="founder-image">
              <img src="/founder-img.webp" alt="founder image" />
            </div>
            
            </div>
          </div>
        </section>

        <section className="radient-section">
            <div className="radient-content">
               <div className="all-4">
                <div className="smallcard-1">
                    <div className="small-img1">
                        <img src ="/platforms.webp" alt="platforms"></img>
                    </div>
                    <div className="text-for-small1">
                        <p>platforms</p>
                        </div>
                        <div className="title-for-small">
                            <p>android & windows</p>
                        </div>
                </div>

             <div className="smallcard-2">
                    <div className="small-img2">
                        <img src ="/phone (1).webp" alt="phones"></img>
                    </div>
                    <div className="text-for-small">
                        <p>mobile</p>
                        </div>
                        <div className="title-for-small2">
                            <p>100% FR</p>
                        </div>
                </div>

                 <div className="smallcard-3">
                    <div className="small-img3">
                        <img src ="/language.webp" alt="languagess"></img>
                    </div>
                    <div className="text-for-small3">
                        <p>language</p>
                        </div>
                        <div className="title-for-small3">
                            <p>english,hindi</p>
                        </div>
                </div>

                 <div className="smallcard-4">
                    <div className="small-img4">
                        <img src ="/device(1).webp" alt="devices"></img>
                    </div>
                    <div className="text-for-small4">
                        <p>device</p>
                        </div>
                        <div className="title-for-small4">
                            <p>mobile,desktop,tablet</p>
                        </div>
                </div>
                </div>

                <div className="big-card">
                    <p>A Business Accounting App like Vyapar (available both as
                        Android/Desktop App) most importantly sets up the business financial
                        data at all times 100% accurately. It works offline, helping one use it
                        without being connected to unreliable internet. Vyapar App paints the
                        picture of what they own (assets), how much they owe (liabilities) and
                        what are their business values (equity). It serves as a basis for proper
                        planning of the business accounting activities.
                    </p>
                </div>
            </div>
       </section>

            <section className="effortless">
                <div className="effortless-content">
                    <div className="effortless-title">
                        <h1>With Vyapar, a Businessman can effortlessly</h1>
                    </div>
                       <div className="text-side">
                    <div className="points">
                        <ul>
                            <li>Become GST compatible.</li>
                            <li>Manage all parties in one single place and market business much easily.</li>
                            <li>View how business is performing instantly.</li>
                            <li>Create, print/share customized invoices.</li>
                            <li>Set up “Auto Backup” and secure his business accounting data against accidental data loss.</li>
                            <li>Set automatic payment reminders.</li>
                            <li>Do business accounting software offline without internet.</li>
                        </ul>
                    </div>
                    </div>

                    <div className="effortless-img">
                        <img src="/effortlessly.webp" alt="effort"/>
                    </div>
                </div>
            </section>

            <section className="banner-section">
           <div className="banner-container">
            <div className="banner-text">
              <p className="banner-maintext">
               We're thrilled that Vyapar has been recognized by Indian Businessmen who 
               have taken it up and made it a success as a result of which we're running 
               towards 10 Million installs on play store.
             </p>

             <p className="banner-anothertext">
             We hope "Vyapar App" continues to ease the life of our Indian businessmen.
             </p>

              <button className="banner-btn">
               Download for Desktop
               </button>
            </div>
           <div className="banner-image">
          <img src="/aboutus-banner.png" alt="Vyapar Logo" />
        </div>
      </div>
   </section>

      <Ratings />
      <Footer />
          
      </div>
       
    </div>
      
  )
}

export default AboutUs