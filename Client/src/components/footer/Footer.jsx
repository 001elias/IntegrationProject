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
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on OfferMe</span>
            <span>Buying on OfferMe</span>
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
              <img src="/src/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/src/img/coin.png" alt="" />
              <span>CAD</span>
            </div>
            <img src="/src/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;