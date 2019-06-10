import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../css/ui/blank-spaces.css";
const BlankSpace = () => {
  return (
    <section>
      <Container>
        <Row noGutters>
          <Col md={12}>
            <div
              className="bg-dark blank-space"
              style={{ width: "100%", height: "60px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlankSpace;
