import { useState } from "react";
import "./Live.css";

const Live = () =>{
    const [OpenChat, setOpenChat] = useState(false);

    return(
        <>
        <div className="live-btn" onClick={() => setOpenChat(!OpenChat)}>
        <img src= "/live-chat.webp" alt="live" />
        </div>

        {OpenChat && (
            <div className="live-card">
                <h1>Let's Chat</h1>
                <p>We are here to assist you</p>

                <label>Name:</label>
                <input type="text" placeholder="Enter your name"/>

                <label>Phone:</label>
                <input type="Number" placeholder="Enter your number"/>

                <button>Connect</button>
            </div>

        )}
        </>
    )
}
export default Live;