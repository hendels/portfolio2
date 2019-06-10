import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
// styles
import "../css/contact/contact.css";
// app components
import SectionHeader from "./UI/sectionHeader";
import Blankspace from "./UI/blankSpace";
import SectionDescription from "./UI/sectionDescription";

const descriptionText = `Et pariatur veniam ea eu fugiat sunt cillum do ipsum non. Enim incididunt laboris ullamco exercitation laboris quis est in reprehenderit nisi sit laborum. Ex aliqua minim eiusmod irure voluptate in consectetur elit Lorem dolor fugiat tempor labore. Nulla aliqua esse aliqua do anim reprehenderit id laborum do aute sunt proident non quis. Ad ipsum ad excepteur consequat. Reprehenderit mollit cillum magna voluptate elit cillum minim ipsum adipisicing fugiat.

Nostrud dolor aliqua laboris eu ad ullamco officia duis occaecat ea. Exercitation officia laborum do incididunt. Veniam enim in sunt nostrud ut velit nisi consequat commodo. Magna ad fugiat commodo ut id enim qui. Et velit occaecat nisi sint cillum.

Labore duis voluptate anim Lorem velit Lorem laborum Lorem proident laborum. Ut dolor aliquip incididunt excepteur nostrud tempor dolor ea aliqua ut ex ea. Deserunt veniam ipsum aute mollit eu incididunt id esse nostrud consequat magna commodo consequat incididunt. Minim qui esse laboris pariatur et deserunt esse magna deserunt. Lorem pariatur reprehenderit ex anim sint.`;

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
    alert("A name was submitted: " + this.state.name);
  }

  render() {
    const contactForm = (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={8}>
            <Form.Group controlId="email_form">
              <Form.Label>Name</Form.Label>
              <Form.Control
                // type="email"
                placeholder="nice to meet yoo"
                value={this.state.name}
                onChange={this.handleChangeName}
                className="rounded-0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>some more?</Col>
        </Row>
        <Row>
          <Col md={8}>
            <Form.Group controlId="email_form">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                className="rounded-0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>Email: pharendarz@gmail.com</Col>
        </Row>
        <Row>
          <Col md={8}>
            <Form.Group controlId="message_form">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChangeMessage}
                className="rounded-0"
              />
            </Form.Group>
          </Col>
          <Col md={4}>GIT</Col>
        </Row>
        <Row>
          <Col md={8}>
            <input type="submit" value="Submit" />
          </Col>
          <Col md={4}>Linked IN</Col>
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
                bootstrapClass=""
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
          </Row>
        </Container>
      </section>
    );
  }
}
export default NameForm;
