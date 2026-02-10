import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MobileApp from "./MobileApp.jsx";
import Solution from "./SolutionCard.jsx";
import LoginCard from "./LoginCard.jsx"; 

const Navbar = () => {
   
    const [isOpen, setIsOpen] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

  

    return(
         
        <>
            <div className="navbar">
               
                <nav className="navbar-container">
                    
                       
                    <div className="logo-for-nav">
                        <img src="/vyapar_logo.svg" alt="logo"/>
                    </div>

                   
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                   
                    <div className={menuOpen ? "navbar-part active" : "navbar-part"}>
                        <Link to="/vyapar" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <a onClick={() => { setIsOpen("mobile"); setMenuOpen(false); }}>
                            Try Mobile App
                        </a>
                        <a onClick={() => { setIsOpen("solution"); setMenuOpen(false); }}>
                            Solution
                        </a>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link to="/pricing" onClick={() => setMenuOpen(false)}>
                            Pricing
                        </Link>
                        <Link to="/desktop" onClick={() => setMenuOpen(false)}>
                            Desktop
                        </Link>
                        <a onClick={() => { setIsOpen("login"); setMenuOpen(false); }}>
                            Login
                        </a>
                        
                      
                    </div>
                </nav>
            </div>

            {isOpen === "mobile" && <MobileApp setIsOpen={setIsOpen} />}
            {isOpen === "solution" && <Solution setIsOpen={setIsOpen} />}
            {isOpen === "login" && <LoginCard setIsOpen={setIsOpen} />} 
        </>
    )
}

export default Navbar;