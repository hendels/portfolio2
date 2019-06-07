// sql / c# / .net
import React from "react";
import {
  Container,
  Col,
  Row,
  ProgressBar,
  Accordion,
  Card,
  Button,
  Badge,
  Table
} from "react-bootstrap";

class Additional extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Table striped bordered hover variant="warning">
            <tbody>
              <tr>
                <td>Testing</td>
                <td colSpan="3">
                  <Badge variant="light">Jest</Badge>
                  <Badge variant="light">Enzyme</Badge>
                </td>
              </tr>
              <tr>
                <td>Tools</td>
                <td colSpan="3">Tools</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td colSpan="3">Languages</td>
              </tr>
              <tr>
                <td>Other</td>
                <td colSpan="3">Other</td>
              </tr>
            </tbody>
          </Table>
          <Accordion>
            <Accordion.Toggle as={Button} eventKey="0">
              <h3>Unrelated, but could be helpful</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                CRM, ERP systems cknowledge
                <Badge variant="light">9</Badge>
                <ProgressBar striped variant="warning" animated now={40} />
                <ProgressBar striped variant="warning" animated now={40} />
              </div>
            </Accordion.Collapse>
          </Accordion>
        </Container>
      </div>
    );
  }
}

export default Additional;
