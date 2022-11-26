import React from "react";
import "./Footer.css";

function Footer(props) {
  const { psuMinorTracker, findOutTheClasses, instructions, ferpaAgreement, aboutUs } = props;

  return (
    <div className="footer">
      <div className="psu-minor-tracker sen-bold-mine-shaft-20px">{psuMinorTracker}</div>
      <div className="flex-row">
        <p className="find-out-the-classes">{findOutTheClasses}</p>
        <div className="menu inter-medium-mine-shaft-18px">
          <div className="instructions">{instructions}</div>
          <div className="ferpa-agreement">{ferpaAgreement}</div>
          <div className="about-us">{aboutUs}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;