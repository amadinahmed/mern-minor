import React from "react";
import "./Nav.css";

function Header(props) {
  const { psuMinorTracker, place, aboutUs, instructions, ferpaAgreement, runReport, title, xcontinue } = props;

  return (
    <div className="header">
      <div className="navigation">
        <div className="psu-minor-tracker sen-bold-mine-shaft-20px">{psuMinorTracker}</div>
        <div className="navigation-1">
          <div className="flex-row poppins-normal-san-juan-16px">
            <div className="place">{place}</div>
            <div className="about-us">{aboutUs}</div>
            <div className="instructions">{instructions}</div>
            <div className="ferpa-agreement">{ferpaAgreement}</div>
          </div>
          <div className="rectangle-719"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
