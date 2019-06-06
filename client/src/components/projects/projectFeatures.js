import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

class Features extends React.Component {
  render() {
    // const features = this.props.features.map(feature => {
    //   return <li>{feature}</li>;
    // });
    return (
      <div className="info-overlay">
        <Container>
          <Row>
            <div
              className="d-flex justify-content-between"
              style={{ width: "100%" }}
            >
              <h1 className="display-4 p-2 text-white">FEATURES</h1>
              <span className="p-2 fas fa-times-circle close-icon" />
            </div>
          </Row>
          <Row>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Features;
