import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
const SkillBar = props => {
  return (
    <div>
      <Row>
        <Col md={props.leftSize}>
          <ProgressBar
            striped
            variant={props.variant}
            animated
            label={`${props.percentage} %`}
            now={props.percentage}
          />
        </Col>
        <Col md={props.rightSize}>
          <p>{props.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default SkillBar;
