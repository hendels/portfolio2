import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "../css/contact/contact.css";

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
    return (
      <section id="contact" ref={this.props.refContact}>
        <Container>
          <Row noGutters>
            <Col md={3}>
              <div className="bg-danger contact-title">
                <h1 className="display-3 text-white">
                  {this.props.sectionName}
                </h1>
              </div>
            </Col>
            <Col md={9}>
              <div className="contact-content">
                <br />
                <br />
                <br />
                <h4>Contact</h4>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md={8}>
                      <Form.Group controlId="email_form">
                        <Form.Label>Email address</Form.Label>
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default NameForm;
