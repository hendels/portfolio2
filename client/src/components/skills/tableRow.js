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
import Aux from "../../hoc/Ax";

class TableRow extends React.Component {
  state = {
    hovered: false
  };
  translateLevel = level => {
    let levelName = "";
    if (level === 1) levelName = "basic";
    else if (level === 2) levelName = "novice";
    else if (level === 3) levelName = "proficent";
    else if (level === 4) levelName = "advanced";

    return levelName;
  };
  render() {
    const rowBadges = this.props.rowBadges.map(badge => {
      return (
        <Aux className="d-flex p-2">
          <Badge variant="secondary" className="p-2 badge">
            {badge.name}
          </Badge>
          <Badge variant="danger" className="p-2 badge">
            {this.state.hovered ? this.translateLevel(badge.lvl) : ""}
          </Badge>
        </Aux>
      );
    });

    return (
      <Aux>
        <tr>
          <Container>
            <Row
              onMouseOver={() => this.setState({ hovered: true })}
              onMouseOut={() => this.setState({ hovered: false })}
            >
              <Col md={3}>
                <td>{this.props.rowName}</td>
              </Col>
              <Col md={9}>
                <td>{rowBadges}</td>
              </Col>
            </Row>
          </Container>
        </tr>
      </Aux>
    );
  }
}

export default TableRow;
