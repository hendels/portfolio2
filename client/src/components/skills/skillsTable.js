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

import TableRow from "./tableRow";
import Aux from "../../hoc/Ax";

class Additional extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Table size="sm" striped bordered hover variant="dark" borderless>
            <tbody>
              <TableRow
                rowName="Testing"
                rowBadges={[
                  { name: "Enzyme", lvl: 2 },
                  { name: "Jest", lvl: 1 }
                ]}
              />
              <TableRow
                rowName="Programming Languages"
                rowBadges={[
                  { name: "SQL", lvl: 2 },
                  { name: "C#/.NET", lvl: 3 },
                  { name: "AL", lvl: 2 },
                  { name: "C/AL", lvl: 4 }
                ]}
              />
            </tbody>
          </Table>
          {/* <Accordion>
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
          </Accordion> */}
        </Container>
      </div>
    );
  }
}

export default Additional;
