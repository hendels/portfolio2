import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../css/ui/sections.css";

class SectionHeader extends React.Component {
  render() {
    const len = this.props.sectionName.length;
    const divide = len / 3;
    let rounded = Math.round(divide);
    if (rounded < divide) rounded += 1;
    let arrayOfLetters = [];
    for (let i = 0; i < rounded; i++) {
      arrayOfLetters.push(this.props.sectionName.substr(i * 3, 3));
    }
    const mapOfLetters = arrayOfLetters.map((letterSet, index) => {
      let set = [];
      for (let i = 0; i < letterSet.length; i++) {
        set.push(
          <span className={`letter row_${index + 1}col_${i + 1}`}>
            {letterSet[i]}
          </span>
        );
      }
      return set;
    });
    return (
      <div className={`${this.props.backgroundClass} ${this.props.headerClass}`}>
        {/* <h1 className="section-title ">{this.props.sectionName}</h1> */}
        <div className="letter-grid section-title">{mapOfLetters}</div>
      </div>
    );
  }
}

export default SectionHeader;
