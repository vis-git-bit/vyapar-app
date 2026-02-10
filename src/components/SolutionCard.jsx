import React from "react";
import './SolutionCard.css';

const Solution = ({ setIsOpen }) => {
     return (
        <div className="solution-card">

            <div className="card-S">
                  <span className="close-btn" onClick={() => setIsOpen (null)}>✖️</span>
                       
                       <div className="solution-columns">
                        <div className="column">
                            <h4>Business Management Solution</h4>
                            <ul>
                                <li>Accounting</li>
                                <li>Inventory</li>
                                <li>Invoicing</li>
                                <li>e-Invoice</li>
                                <li>POS</li>
                                <li>OCR</li>
                            </ul>
                        </div>

                        <div className="column">
                            <h4>Industry Solution</h4>
                            <ul>
                                <li>Retail</li>
                                <li>Pharmacy</li>
                                <li>Grocery</li>
                                <li>Restaurant</li>
                                <li>jwellery</li>
                                <li>clothing / Apparel</li>
                            </ul>
                        </div>
                       </div>
            </div>
        </div>
     )
}

export default Solution;