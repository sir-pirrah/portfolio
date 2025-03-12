import React from "react";
import "./Works.css";
import upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="Works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ispum is simply dummy text of printing Lorer
          <br />
          Lorem is simpley dummy text of printing
          <br />
          Lorem is simpley dummy text of printing
          <br />
          Lorem ispum is simpley dummy text
        </span>

        <button className="button s--button">Hire me</button>

        <div
          className="blur s--blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="W-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="W-secCircle">
            <img src={Amazon} alt="" />
          </div>
          {""}
          <div className="W-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
