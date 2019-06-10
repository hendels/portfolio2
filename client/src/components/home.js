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
  "https://drive.google.com/open?id=1_Czm0U78tT7b2iPh1gYdGPs_hPxzN-ch";
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
              <div className="profile-overlay">contact</div>
            </Col>
            <Col md={7}>
              <div className="d-flex flex-column">
                <div className="introduce text-white">
                  <Row>
                    <Col md={12}>
                      <Row noGutters>
                        <Col md={12}>
                          <div className="introduce-header">{Name}</div>
                        </Col>
                      </Row>
                      <Row noGutters>
                        <Col md={12}>
                          <div className="introduce-header">
                            <span className="text-secondary">H</span>a
                            <span className="text-secondary">r</span>
                            en
                            <span className="text-secondary">d</span>
                            ar
                            <span className="text-secondary">z</span>
                          </div>
                        </Col>
                      </Row>
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
                <div className="p-4 bg-black profile-label">
                  <span className="description">
                    <h3>Wanna be Java Script developer</h3>
                  </span>
                  <a href={cvLink} target="_blank" className="file-container">
                    <ReactSvg
                      className="svg-icon"
                      src={CvIcon}
                      style={{ height: "3rem" }}
                    />
                  </a>
                  <span className="file-description">get CV here</span>
                </div>
                <div>
                  <div className="bg-primary d-flex flex-row align-items-stretch text-center text-white">
                    <div
                      className="main-header-item p-4 bg-danger"
                      onClick={e =>
                        this.handleClickToNavItem(e, aboutMe, "about")
                      }
                    >
                      <i className="fas fa-address-card fa-2x d-none d-sm-block" />
                      about me
                      {/* </a> */}
                    </div>
                    <div
                      className="main-header-item p-4  bg-success"
                      onClick={e =>
                        this.handleClickToNavItem(e, skills, "skills")
                      }
                    >
                      {/* <a
                        onClick={e =>
                          this.handleClickToNavItem(e, skills, "skills")
                        }
                      > */}
                      <i className="fas fa-air-freshener fa-2x d-none d-sm-block" />
                      skilz
                      {/* </a> */}
                    </div>
                    <div
                      className="main-header-item p-4 bg-warning"
                      onClick={e =>
                        this.handleClickToNavItem(e, experience, "experience")
                      }
                    >
                      {/* <a
                        onClick={e =>
                          this.handleClickToNavItem(e, experience, "experience")
                        }
                      > */}
                      <i className="fas fa-dog fa-2x d-none d-sm-block" />
                      exp
                      {/* </a> */}
                    </div>
                    <div
                      className="main-header-item p-4 bg-secondary"
                      onClick={e =>
                        this.handleClickToNavItem(e, projects, "projects")
                      }
                    >
                      {/* <a
                        onClick={e =>
                          this.handleClickToNavItem(e, projects, "projects")
                        }
                      > */}
                      <i className="fas fa-dragon fa-2x d-none d-sm-block" />
                      projects
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* =================================================== OLD */}
        {/* <a className="flipBtn" onClick={this.handleFlip}>
            {this.state.flipped ? "Proffesional" : "Flip"}{" "}
          </a> */}
      </section>
    );
  }
}

export default Home;
