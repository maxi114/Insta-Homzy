import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/*righ side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>

          <div className="flexCenter f-menu">
            <span> <a href="https://idxnest.pages.dev/" target="_blank" style={{textDecoration: "underline"}}>Built by Max</a> </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
