import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            error totam debitis dolorem ullam magnam, magni commodi vero illum
            quos, illo, molestias similique architecto esse inventore autem
            dicta in optio!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Deliver</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+880170000000</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copy-right">
        Copyright 2024 &copy; Tomato.com - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
