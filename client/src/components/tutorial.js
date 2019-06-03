import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Button,
  Image,
  Form,
  Card,
  Accordion,
  InputGroup
} from "react-bootstrap";
//imgs
import Scrollspy from "react-scrollspy";

import logoImg from "../img/tut/mlogo.png";
import bookImg from "../img/tut/book.png";
import person1 from "../img/tut/person1.jpg";
import person2 from "../img/tut/person2.jpg";
import person3 from "../img/tut/person3.jpg";
import person4 from "../img/tut/person4.jpg";

// import "../css/tutorial/style.css";

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        {/* // NAVBAR */}
        <Navbar
          variant="light"
          expand="md"
          fixed="top"
          py={4}
          bg="light"
          id="main-nav"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img src={logoImg} width="50" height="50" />
              <h3 className="d-inline align-middle">Harendarz</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="ml-auto">
                <Scrollspy
                  items={["showcase", "authors", "about", "contact"]}
                  currentClassName="is-current"
                >
                  <Nav.Link href="#showcase">Home</Nav.Link>
                  <Nav.Link href="#authors">Authors</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Scrollspy>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
        <br />
        <br />
        {/* // SHOWCASE */}
        <section id="showcase">
          <div className="primary-overlay text-white">
            <Container fluid={true}>
              {/* <Container> */}
              <Row>
                <Col md="6" className="text-center">
                  <h1 className="display-2 mt-5 pt-5">
                    Do what you dream of...
                  </h1>
                  <p className="lead">
                    Eu cillum occaecat in mollit ex Lorem adipisicing nostrud
                    non incididunt.
                  </p>
                  <Button
                    variant="outline-secondary"
                    className="text-white"
                    size="lg"
                  >
                    <i className="fas fa-arrow-right" />
                    Read more
                  </Button>
                </Col>
                <Col md="6" className="text-center">
                  {/* <Image width="75%" height="75%" src={bookImg} fluid /> */}
                  <img
                    src={bookImg}
                    alt=""
                    width="80%"
                    height="80%"
                    className="book img-fluid d-none d-md-block"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* NEWSLETTER */}
        <section id="newsletter" class="bg-dark text-white py-5">
          <Container fluid={true}>
            <Row>
              <Col md="4">
                <Form.Control
                  className="form-control-lg mb-resp"
                  type="text"
                  placeholder="enter name"
                />
              </Col>
              <Col md="4">
                <Form.Control
                  className="form-control-lg mb-resp"
                  type="email"
                  placeholder="enter email"
                />
              </Col>
              <Col md="4">
                <Button
                  variant="primary"
                  className="btn-block mb-resp"
                  size="lg"
                >
                  <i className="fas fa-envelope-open-o" />
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* BOXES */}
        <section id="boxes" className="py-5">
          <Container fluid={true}>
            <Row>
              <Col md="3">
                <Card className="text-center border-primary mb-resp">
                  <Card.Body>
                    <h3 className="text-primary">Be better</h3>
                    <p className="text-muted">
                      Veniam amet veniam cillum aliquip aliquip incididunt est
                      nisi consequat nulla labore officia labore.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card className="text-center bg-primary text-white mb-resp">
                  <Card.Body>
                    <h3>Be smarter</h3>
                    <p>
                      Veniam amet veniam cillum aliquip aliquip incididunt est
                      nisi consequat nulla labore officia labore.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card className="text-center border-primary mb-resp">
                  <Card.Body>
                    <h3>Be faster</h3>
                    <p>
                      Veniam amet veniam cillum aliquip aliquip incididunt est
                      nisi consequat nulla labore officia labore.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card className="text-center bg-primary text-white ">
                  <Card.Body>
                    <h3>Be Stronger</h3>
                    <p>
                      Veniam amet veniam cillum aliquip aliquip incididunt est
                      nisi consequat nulla labore officia labore.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* why about section */}
        <section id="about" className="py-5 text-center bg-light">
          <Container fluid={true}>
            <Row>
              <Col>
                <div className="info-header mb-5">
                  <h1 className="text-primary pb-3">Why this book?</h1>
                  <p className="lead pb-3">
                    Occaecat ut id sint cillum officia qui minim quis officia
                    tempor.
                  </p>
                </div>
                {/* ACCORDION */}
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Proident aute anim minim irure fugiat aliqua tempor et
                        dolore esse ullamco dolor.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
        {/* AUTHORS */}
        <section id="authors">
          <Container fluid={true}>
            <Row>
              <Col>
                <div className="info-header mb-5">
                  <h1 className="text-primary pb-3">Our team</h1>
                  <p className="lead">
                    Et labore minim magna amet anim elit proident.Duis ea ut
                    sint Lorem exercitation occaecat mollit reprehenderit.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              {[
                { name: "Susan Border", position: "Lead writer", pic: person1 },
                { name: "Mike Jagger", position: "Sky writer", pic: person2 },
                {
                  name: "Eddie Mercury",
                  position: "Wall writer",
                  pic: person3
                },
                { name: "Uziq Mike", position: "Song writer", pic: person4 }
              ].map(dude => {
                return (
                  <Col lg={3} md={6}>
                    <Card className="text-center">
                      <Card.Body>
                        <img
                          src={dude.pic}
                          alt=""
                          className="img-fluid rounded-circle w-50 mb-3"
                        />
                        <h3>{dude.name}</h3>
                        <h5 className="text-muted">{dude.position}</h5>
                        <p>
                          Nisi anim cillum qui eu occaecat veniam et
                          reprehenderit occaecat nisi proident.
                        </p>
                        <div className="d-flex justify-content-center">
                          <div className="p-4">
                            <a href="https://facebook.com">
                              <i className="fab fa-facebook" />
                            </a>
                          </div>
                          <div className="p-4">
                            <a href="https://twitter.com">
                              <i className="fab fa-twitter" />
                            </a>
                          </div>
                          <div className="p-4">
                            <a href="https://instagram.com">
                              <i className="fab fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        {/* CONTACT */}
        <section id="contact">
          <Container fluid={true}>
            <Row>
              <Col lg={9}>
                <h3>Get in touch</h3>
                <p className="lead">
                  Sunt elit adipisicing cupidatat in non et amet cupidatat.
                </p>
                <Form>
                  <InputGroup className="input-group-lg mg-3 mb-resp">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fas fa-user" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="Name" required />
                  </InputGroup>
                  <InputGroup className="input-group-lg mg-3 mb-resp">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fas fa-envelope" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="Email" required />
                  </InputGroup>
                  <InputGroup className="input-group-lg mg-3 mb-resp">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <i className="fas fa-pencil-alt" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={3}
                    />
                  </InputGroup>
                  <Button variant="primary" className="btn-block" size="lg">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col lg="3" className="align-self-center">
                <img src={logoImg} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        {/* FOOTER */}
        <br />
        <footer id="main-footer" className="py-5 bg-primary text-white">
          <Container fluid={true}>
            <Row className="text-center">
              <Col md={6} className="ml-auto">
                <p className="lead">copyright &copy; 2019</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Tutorial;
