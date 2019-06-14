import React from "react";
import {
  Container,
  Col,
  Row,
  ProgressBar,
  Accordion,
  Card,
  Button
} from "react-bootstrap";
import SkillBar from "./skillBar";

class Core extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <p className="skills-category">Core</p>
            </Col>
          </Row>
          {/* // prettier-ignore */}
          <SkillBar
            variant="warning"
            leftSize={8}
            rightSize={4}
            percentage={60}
            description="JavaScript ES6"
          />
          <SkillBar
            variant="warning"
            leftSize={8}
            rightSize={4}
            percentage={50}
            description="Redux"
          />
          <SkillBar
            variant="warning"
            leftSize={8}
            rightSize={4}
            percentage={65}
            description="React"
          />
          <SkillBar
            variant="warning"
            leftSize={8}
            rightSize={4}
            percentage={25}
            description="Node.js"
          />
          <Row>
            <Col md={12}>
              <p className="skills-category">Web</p>
            </Col>
          </Row>
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={80}
            description="HTML"
          />
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={70}
            description="CSS"
          />
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={50}
            description="SASS"
          />
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={85}
            description="React / CSS Bootstrap"
          />
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={95}
            description="React Material-UI"
          />
        </Container>
      </div>
    );
  }
}

export default Core;
