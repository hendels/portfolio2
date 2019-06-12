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
              className="d-flex justify-content-between info-header"
              style={{ width: "100%" }}
            >
              <h1 className="display-4 p-2">FEATURES</h1>
              <span
                onClick={() => this.props.handleShowElement()}
                className="p-2 fas fa-times-circle close-icon"
              />
            </div>
          </Row>
          <Row>
            <Table striped bordered hover variant="info" className="info-body">
              <tbody>
                <tr>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                </tr>
                <tr>
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
