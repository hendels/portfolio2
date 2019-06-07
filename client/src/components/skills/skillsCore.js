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
              <h3>Core</h3>
            </Col>
          </Row>
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
            percentage={15}
            description="React"
          />
          <Row>
            <Col md={12}>
              <h3>Luzne</h3>
            </Col>
          </Row>
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={90}
            description="HTML"
          />
          <SkillBar
            variant="danger"
            leftSize={8}
            rightSize={4}
            percentage={80}
            description="CSS / Sass"
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
          <Row>
            <Col md={12}>
              <h3>Test</h3>
            </Col>
          </Row>
          <SkillBar
            variant="secondary"
            leftSize={8}
            rightSize={4}
            percentage={95}
            description="Enzyme"
          />
          <SkillBar
            variant="secondary"
            leftSize={8}
            rightSize={4}
            percentage={95}
            description="Jest"
          />
        </Container>
      </div>
    );
  }
}

export default Core;
