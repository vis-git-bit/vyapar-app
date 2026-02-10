 import React from "react";
 import'./Sec2.css';
 

 const Sec2 = () =>{
    return(

 
 
 <section id="sec-2" className="section2">
        <div className="section2-content">
          {/* Card 1 */}
          <div className="card-1">
            <img src="/emoji.webp" alt="emoji" />
            <h3>1 crore+</h3>
            <p>Happy Customers</p>
          </div>
          {/* Card 2 */}
          <div className="card-2">
            <img src="/phone.webp" alt="phone" />
            <h3>Free</h3>
            <p>Mobile App</p>
          </div>
          {/* Card 3 */}
          <div className="card-3">
            <img src="/play.webp" alt="play" />
            <h3>Rated 4.7/5</h3>
            <p>On Play Store</p>
          </div>
          {/* Card 4 */}
          <div className="card-4">
            <img src="/multi device.webp" alt="multidevice" />
            <h3>Multi Device</h3>
            <p>Use together </p>
          </div>
          {/* Card 5 */}
          <div className="card-5">
            <img src="/multi user.webp" alt="multiuser" />
            <h3>Multi-User</h3>
            <p> Management
              Feature</p>
          </div>
        </div>
      </section>

    )
}
export default Sec2;