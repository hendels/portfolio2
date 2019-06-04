import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/skills/skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div>
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
        <section id="section-skills" ref={this.props.refSkills}>
          <Container>
            <Row noGutters>
              <Col md={3}>
                <div className="bg-success skills-title">
                  <h1 className="display-3 text-white">
                    {this.props.sectionName}
                  </h1>
                </div>
              </Col>
              <Col md={9}>
                <div className="skills-content">
                  <h4>rest is here</h4>
                  <p>
                    ipsum et veniam pariatur excepteur veniam adipisicing aute
                    ipsum ut. Adipisicing labore voluptate ut officia ea Lorem
                    pariatur officia aute voluptate et dolore minim. Pariatur
                    fugiat culpa eiusmod aliqua laboris dolor officia anim
                    deserunt. Eu do eu irure fugiat ipsum quis esse. In
                    cupidatat ipsum velit quis aliqua officia adipisicing Lorem
                    et cillum in dolor voluptate proident.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Skills;
