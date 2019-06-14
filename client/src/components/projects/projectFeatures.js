import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

class Features extends React.Component {
  render() {
    const features = this.props.features.map(feature => {
      return (
        <tr>
          <td>{feature.label}</td>
        </tr>
      );
    });
    return (
      <div className="info-overlay">
        <Container>
          <Row>
            <div
              className="d-flex justify-content-between info-header"
              style={{ width: "100%" }}
            >
              <span className="p-2">FEATURES</span>
              <span
                onClick={() => this.props.handleShowElement()}
                className="p-2 fas fa-times-circle close-icon"
              />
            </div>
          </Row>
          <Row>
            <Table
              size="sm"
              striped
              bordered
              hover
              variant="info"
              className="info-body"
            >
              <tbody>{features}</tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Features;
