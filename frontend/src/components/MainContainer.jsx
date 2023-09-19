import React from "react";
import "./css/MainContainer.css";
import logo from "../img/logo.png";
import cer1 from "../img/cer1.jpg";

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
                  Academic Bank of Credits <br></br>
                  Mon 28 Aug 2023 <br></br> 12:37:59 IST
                  </div>
                <div className="det-right">
                  <button type="button" className="btn3">Verify</button> <br></br>
                  <button type="button" className="btn3">View</button>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
}

export default MainContainer;
