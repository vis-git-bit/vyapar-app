import React from "react";
import "./BestChoice.css";

const Best = () => {
  return (
    <section className="best-section">
      <div className="best-container">
        {/* Main Header */}
        <div className="best-header">
          <h1>
            Why is Vyapar PC Billing Software the Best Choice for Small Businesses?
          </h1>
        </div>

        {/* Table Card */}
        <div className="best-card">
          <table className="best-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Other Billing Software</th>
                <th>Vyapar Billing Software</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                <td>Free</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Custom Invoicing</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Professional Invoice Themes</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Barcode Scanning</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>GST Calculations & Reports</td>
                <td>✔️</td>
                <td>✔️</td>
                </tr>
              <tr>
                <td>Multi Payment Modes</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Payment Tracking & Reminders</td>
                <td>❌</td>
                <td>✔️</td>
                </tr>
              <tr>
                <td>Client Management</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Accounting Integration</td>
                <td>❌</td>
                <td>✔️</td>
                </tr>
              <tr>
                <td>Inventory Tracking</td>
                <td>❌</td>
                <td>✔️</td>
               </tr>
              <tr>
                <td>Multi-Device Access</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Expense Tracking</td>
                <td>❌</td>
                <td>✔️</td>
                </tr>
              <tr>
                <td>Real-Time Business Reports</td>
                <td>❌</td>
                <td>✔️</td>
                </tr>
              <tr>
                <td>Data Security & Backup</td>
                  <td>❌</td>
                  <td>✔️
                
              
              
                  <div className="btn-wrapper">
                    <button className="D-btn">Download Vyapar Now</button>
                  </div>
             </td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Best;
