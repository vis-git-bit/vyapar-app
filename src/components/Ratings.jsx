import React, { useState } from "react";
import "./Ratings.css";
import { Star } from "lucide-react";


const Ratings = () =>{
    const [ClickStar , setClickStar] = useState (0);
    const Stars =[1,2,3,4,5]

    return(
         <div className= "ratings-section">
            <div className="section-content">

                <div className="main-T">
                <h1>How Useful is Vyapar for Your Business?</h1>
               </div> 

                <div className="star">
                    {Stars.map((value,index) => (
                        <span
                         key={index}
                         onClick={ () => setClickStar(value)}
                         >
                        <Star fill={`${value <= ClickStar ? "gold":"#dddddd"}`} strokeWidth={0}  size={30}/>
                         </span>
                    ))}
                
                </div>
               <div className="line-1">
                <p>Average rating 4.44 / 5. Vote count: 31681</p>
               </div>

               <div className="line-2">
                <p>Thank you for rating this post</p>
               </div>
            </div>
         </div>
    )
}

export default Ratings;