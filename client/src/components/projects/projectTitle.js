import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const TitleSection = props => {
  return (
    <div className="d-flex align-items-center buttons-container">
      <span
        onClick={e => props.handleClickToNavItem(e, props.refProject)}
        className="title-item"
      >
        {props.projectName}
      </span>
      <span
        onClick={e =>
          props.handleClickToNavItem(e, props.refProject, "features")
        }
        className="title-item"
      >
        Features
      </span>
      <span
        onClick={e => props.handleClickToNavItem(e, props.refProject, "about")}
        className="title-item"
      >
        About
      </span>
      {/*  dummy */}
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id="tooltip-disabled">
            Please wait 15-30 sec to load Heroku's dyno.
          </Tooltip>
        }
      >
        <span className="title-item demo">Demo</span>
      </OverlayTrigger>
    </div>
  );
};

export default TitleSection;
