import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:maximilliankodi@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
