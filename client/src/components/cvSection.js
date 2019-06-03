import React from "react";
import "../css/cv/cv-section.css";

const CvSection = props => {
  return (
    <div className="cv-section">
      <div className="cv-description">
        <h2>CV is here -></h2>
        <p>do oficjalnych celów rekrutacyjnych</p>
      </div>
      <div className="regular-box">
        <h4>CV</h4>
        <p className="price">take it</p>
        <a href="" className="btn">
          download
        </a>
      </div>
    </div>
  );
};

export default CvSection;
