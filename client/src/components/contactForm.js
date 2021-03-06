import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
// styles
import "../css/contact/contact.css";
import "../css/ui/sections.css";
// app components
import SectionHeader from "./UI/sectionHeader";
import Blankspace from "./UI/blankSpace";
import SectionDescription from "./UI/sectionDescription";

const descriptionText = ``;

const gitIcon = <i className="fab fa-github-square reach-me-icon" />;
const linkedInIcon = <i className="fab fa-linkedin reach-me-icon" />;
const mailIcon = <i className="fas fa-envelope-square reach-me-icon" />;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Currently unavailable.");
  }

  render() {
    const contactForm = (
      <Form>
        <Row>
          {/* FORM */}
          <Col md={8}>
            <Col md={12}>
              <Form.Group controlId="email_form">
                <Form.Label className="item-label">Your name:</Form.Label>
                <Form.Control
                  placeholder="Nice to meet you!"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                  className="rounded-0  contact-item"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="email_form">
                <Form.Label className="item-label">Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                  className="rounded-0  contact-item"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="message_form">
                <Form.Label className="item-label">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChangeMessage}
                  className="rounded-0  contact-item"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button
                className="rounded-0 button-submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Col>
          </Col>
          {/* CONTACT */}
          <Col md={4}>
            <div className="contact-how-to-reach-me">
              <Col md={12}>
                <p className="title-reach-me">How to reach me?</p>
              </Col>

              <Col md={12}>
                <p className="reach-me-item">
                  <a
                    href="https://www.linkedin.com/in/przemys%C5%82aw-harendarz-4052b252"
                    target="_blank"
                  >
                    {linkedInIcon}
                    {` LinkedIn`}
                  </a>
                </p>
              </Col>
              <Col md={12}>
                <p className="reach-me-item">{mailIcon} pharendarz@gmail.com</p>
              </Col>
              <Col md={12}>
                <p className="reach-me-item">
                  <a href="https://github.com/pharendarz" target="_blank">
                    {gitIcon} GitHub
                  </a>
                </p>
              </Col>
              <Col md={12} />
            </div>
          </Col>
        </Row>
      </Form>
    );
    return (
      <section id="contact" ref={this.props.refContact}>
        <Container>
          <Blankspace />
          <Row noGutters>
            <Col md={3}>
              <SectionHeader
                sectionName={this.props.sectionName}
                backgroundClass="contact-header"
                headerClass="contact-title"
              />
            </Col>
            <Col md={9}>
              <SectionDescription
                descriptionClass="contact-description"
                descriptionHeader={`Let's get in touch`}
                descriptionText={descriptionText}
              >
                {contactForm}
              </SectionDescription>
            </Col>
            <br />
          </Row>
        </Container>
      </section>
    );
  }
}
export default NameForm;
