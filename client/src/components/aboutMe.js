import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/about-me/aboutMe.css";

class AboutMe extends React.Component {
  render() {
    return (
      <section id="section-about" ref={this.props.refAboutMe}>
        <Container>
          <Row noGutters>
            <Col md={3}>
              <div className="bg-danger about-title">
                <h1 className="display-3 text-white">
                  {this.props.sectionName}
                </h1>
              </div>
            </Col>
            <Col md={9}>
              <div className="about-content">
                <br />
                <br />
                <br />
                <h4>About me</h4>
                <p>
                  ipsum et veniam pariatur excepteur veniam adipisicing aute
                  ipsum ut. Adipisicing labore voluptate ut officia ea Lorem
                  pariatur officia aute voluptate et dolore minim. Pariatur
                  fugiat culpa eiusmod aliqua laboris dolor officia anim
                  deserunt. Eu do eu irure fugiat ipsum quis esse. In cupidatat
                  ipsum velit quis aliqua officia adipisicing Lorem et cillum in
                  dolor voluptate proident.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutMe;
