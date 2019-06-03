import React from "react";
import "../css/aboutme/aboutMe.css";
// photos
import mePhoto from "../img/me-resized.jpg";
import person1 from "../img/person1.jpg";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    };
    this.handleFlip = this.handleFlip.bind(this);
  }
  handleFlip() {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    const Name = "Przemek ";
    return (
      <section id="section-home" ref={this.props.refHome}>
        <Container id="main-header">
          <Row noGutters>
            <Col md={5}>
              <img src={mePhoto} />
              {/* <div id="main-header-photo" /> */}
            </Col>
            <Col md={7}>
              <div className="d-flex flex-column">
                <div className="p-5 bg-dark text-white">
                  <Row>
                    <Col md={12}>
                      <h1 className="display-4">
                        {Name}
                        <span className="text-secondary">H</span>a
                        <span className="text-secondary">r</span>
                        en
                        <span className="text-secondary">d</span>
                        ar
                        <span className="text-secondary">z</span>
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <a href="https://facebook.com" className="text-white">
                          <i className="fab fa-facebook" />
                        </a>
                        <a href="https://facebook.com" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="https://facebook.com" className="text-white">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="https://facebook.com" className="text-white">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="p-4 bg-black">
                  Wanna be Java Script developer
                </div>
                <div>
                  <div className="bg-primary d-flex flex-row align-items-stretch text-center text-white">
                    <div className="main-header-item p-4 bg-danger  ">
                      <i className="fas fa-address-card fa-2x d-none d-sm-block" />
                    </div>
                    <div className="main-header-item p-4  bg-success ">
                      <i className="fas fa-air-freshener fa-2x d-none d-sm-block" />
                    </div>
                    <div className="main-header-item p-4 bg-warning  ">
                      <i className="fas fa-dog fa-2x d-none d-sm-block" />
                    </div>
                    <div className="main-header-item p-4 bg-secondary  ">
                      <i className="fas fa-dragon fa-2x d-none d-sm-block" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* =================================================== OLD */}
        {/* <div className="showcase">
          <h1>
            {this.state.flipped ? "My name is Przemy" : "My name is Przemek."}
          </h1>
          <p>wanna be web dev / 'some icon' Krakow / Wroclaw</p>
          <a href="" className="linkedIn-link">
            linkedin link
          </a>
          <a href="" className="git-link">
            git link
          </a>
          <a href="" className="email">
            pharendarz@gmail.com
          </a>

          <a className="flipBtn" onClick={this.handleFlip}>
            {this.state.flipped ? "Proffesional" : "Flip"}{" "}
          </a>
        </div> */}
        {/*  rgiht section */}
        {/* <div className="top-box top-box-a">
          <h4>blank</h4>
          <p className="price">blank</p>
          <a href="" className="btn">
            blank
          </a>
        </div>
        <div className="top-box top-box-b">
          <h4>blank</h4>
          <p className="price">blank</p>
          <a href="" className="btn">
            blank
          </a>
        </div> */}
        {/* <div>
          <p>hard worker / scraper /</p>
          <p>
            https://github.com/kamranahmedse/developer-roadmap napisz ze
            pokrywasz jakis t am procent tego linka
          </p>
          <p>hire me!</p>
          <p>
            napisz ze znasz devtools / redux dev tools / chrome devtools / react
            devtools
          </p>
        </div> */}
      </section>
    );
  }
}

export default AboutMe;
