import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Title = props => {
  return (
    <div className="d-flex justify-content-start">
      <h1
        onClick={e => props.handleClickToNavItem(e, props.refProject)}
        className="display-4 text-white pr-5"
      >
        {props.projectName}
      </h1>
      <h2
        onClick={e =>
          props.handleClickToNavItem(e, props.refProject, "features")
        }
        className="display-4 text-white pr-5"
      >
        Features
      </h2>
      <h2
        onClick={e => props.handleClickToNavItem(e, props.refProject, "about")}
        className="display-4 text-white"
      >
        About
      </h2>
      {/*  dummy */}
      <div className="display-4 text-white" />
    </div>
  );
};

export default Title;
