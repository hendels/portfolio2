import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// styles
import "../css/about-me/aboutMe.css";

import SectionHeader from "./UI/sectionHeader";
import Blankspace from "./UI/blankSpace";
import SectionDescription from "./UI/sectionDescription";

const descriptionText = (
  <div>
    <p>
      My name is Przemek, actually I'm living in Krakow - Poland, but relocating
      is not a problem at all. I graduated from master's studies computer
      science and econometrics with specialization project manager.
    </p>
    <p>
      I'm programming since 2012, mainly in areas related to databases, dataflow
      and processes. From 2017 I've became Dynamics NAV Programmer (ERP system
      from Microsoft) - for more than two years I successfully delivered many
      solutions to our clients in Europe. I've served over 20 customers and
      participated in quite big projects like new ERP system for one of the two
      biggest players in radio businness in Poland. I really liked my job, but
      system provider took some unusual steps about the future releases of NAV
      development and I'm in the team who don't like that.
    </p>
    <p>
      JavaScript and Front End in general grab my attention from 14 months, when
      I tried to write some web interface to my .NET application. Since then I'm
      programming constantly (daily!) applications for myself based on MERN
      stack (MongoDB, Express, React / Redux, Node.js) and other popular
      libraries with success and I have to say - I love JS. I think that I
      reached the point when I need some guidance from real-life environment and
      it's time to get a job as a Junior Front End Developer.
    </p>
    <p>
      I'm a professional, hard worker and fast learner, passionate about
      everything what I am doing in my life, bike freak and techno producer.
    </p>
  </div>
);

class AboutMe extends React.Component {
  render() {
    return (
      <section id="section-about" ref={this.props.refAboutMe}>
        <Container>
          <Blankspace />
          <Row noGutters>
            <Col md={3}>
              <SectionHeader
                sectionName={this.props.sectionName}
                backgroundClass="about-header"
                headerClass="about-title"
              />
            </Col>
            <Col md={9}>
              <SectionDescription
                descriptionClass="about-description"
                descriptionHeader={`Hi,`}
                descriptionText={descriptionText}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutMe;
