import React from "react";
import ReactSvg from "react-svg";
// styles
import "../css/home/home.css";

// photos
import mePhoto from "../img/me-resized.jpg";
// import mePhoto from "../img/person1.jpg";
// icons
import CvIcon from "../svg/cv.svg";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

const cvLink =
  "https://drive.google.com/open?id=0BzWRWdaIKn0KblRsd3JwMTZjU0pkYjAtTUJtMjNkQW1nMHRJ";

const aboutMeIcon = "fas fa-globe-europe";
const skillsIcon = "fa-air-freshener";
const experienceIcon = "fa-dog";
const projectsIcon = "fa-dragon";

class Home extends React.Component {
  handleClickToNavItem(e, ref, focusedId) {
    e.preventDefault();
    this.setState(
      {
        focusedNavItem: focusedId ? focusedId : false
      },
      () => {
        // scroll to given ref
        window.scrollTo(0, ref.current.offsetTop);
      }
    );
  }

  componentDidMount() {
    this.props.animateHomeButtons();
  }
  render() {
    const Name = "Przemek ";
    const {
      home,
      aboutMe,
      skills,
      experience,
      projects,
      contact
    } = this.props.refs;
    return (
      <section id="section-home" ref={home}>
        <Container id="main-header">
          <Row noGutters>
            <Col md={5}>
              <img className="profile-photo" src={mePhoto} />
              {/* <div className="profile-overlay">contact</div> */}
            </Col>
            <Col md={7}>
              <div className="d-flex flex-column">
                <div className="introduce text-white">
                  <Row>
                    <Col md={12}>
                      <Row noGutters>
                        <Col md={12}>
                          <span className="introduce-header">
                            <span className="name">{Name}</span>
                          </span>
                        </Col>
                      </Row>
                      <Row noGutters>
                        <Col md={12}>
                          <span className="introduce-header">
                            <span className="pl-4 surname">
                              <span className="text-secondary">H</span>a
                              <span className="text-secondary">r</span>
                              en
                              <span className="text-secondary">d</span>
                              ar
                              <span className="text-secondary">z</span>
                            </span>
                          </span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="p-4  profile-label">
                  <span className="description">
                    <span>Junior Front End developer</span>
                  </span>
                  <a href
                    onClick={e =>
                      this.handleClickToNavItem(e, contact, "contact")
                    }
                    className="contact-icon"
                  >
                    <i class="far fa-address-book" />
                  </a>
                  <span className="contact-label">contact</span>
                  <a href={cvLink} target="_blank" className="file-container">
                    <i class="far fa-file-alt" />
                  </a>
                  <span className="file-description">my CV</span>
                </div>
                <div>
                  <div className="aboutButton d-flex flex-row align-items-stretch text-center">
                    <div
                      className="main-header-item p-4 bg-danger"
                      onClick={e =>
                        this.handleClickToNavItem(e, aboutMe, "about")
                      }
                    >
                      <i
                        className={`fas ${aboutMeIcon} fa-2x d-none d-sm-block`}
                      />
                      about
                    </div>
                    <div
                      className="main-header-item p-4  skillsButton"
                      onClick={e =>
                        this.handleClickToNavItem(e, skills, "skills")
                      }
                    >
                      <i
                        className={`fas ${skillsIcon} fa-2x d-none d-sm-block`}
                      />
                      skills
                    </div>
                    <div
                      className="main-header-item p-4 experienceButton"
                      onClick={e =>
                        this.handleClickToNavItem(e, experience, "experience")
                      }
                    >
                      <i
                        className={`fas ${experienceIcon} fa-2x d-none d-sm-block`}
                      />
                      experience
                    </div>
                    <div
                      className="main-header-item p-4 projectsButton"
                      onClick={e =>
                        this.handleClickToNavItem(e, projects, "projects")
                      }
                    >
                      <i
                        className={`fas ${projectsIcon} fa-2x d-none d-sm-block`}
                      />
                      projects
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;
