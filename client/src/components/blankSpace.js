import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const BlankSpace = () => {
  return (
    <section>
      <Container>
        <Row noGutters>
          <Col md={12}>
            <div
              className="bg-dark"
              style={{ width: "100%", height: "150px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlankSpace;
