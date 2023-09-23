// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./css/MainContainer.css";
import logo from "../img/logo.png";
import cer1 from "../img/cer1.jpg";

// Placeholder Certificate Components
const Certificate1 = () => (
  <div>
    <h2>Certificate 1</h2>
    {/* Add content for Certificate 1 */}
  </div>
);

const Certificate2 = () => (
  <div>
    <h2>Certificate 2</h2>
    {/* Add content for Certificate 2 */}
  </div>
);

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div className="cards">
          <div className="details">
            <div className="det-left flex pb-10 gap-2">
              <img className="logo" src={logo} alt="logo" width={70} />
              <img className="cer1" src={cer1} alt="cer1" width={100} />
            </div>
            <div className="det-cen">
              Khan Academy <br></br>
              Sat 23 Sept 2023 <br></br>
            </div>
            <div className="det-right">
              {/* Add routes to the two buttons */}
              <Link to=''>
                <button type="button" className="btn3">
                  View 
                </button>
              </Link>
              <br></br>
              <Link to="/view-certificate/certificate-2">
                <button type="button" className="btn3">
                  Verify
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainContainer;