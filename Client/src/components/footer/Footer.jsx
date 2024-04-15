import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>OfferMe</h2>
            <span>© OfferMe International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="link">
              <img src="/src/img/coin.png" alt="" />
              <span>CAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;