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
          <Table size="sm" striped bordered hover variant="danger" borderless>
            <tbody>
              <TableRow
                rowName="Programming Languages"
                rowBadges={[
                  { name: "SQL", lvl: 2 },
                  { name: "C#/.NET", lvl: 1 },
                  { name: "AL", lvl: 2 },
                  { name: "C/AL", lvl: 4 },
                  { name: "VBA", lvl: 4 }
                ]}
              />
              <TableRow
                rowName="Databases"
                rowBadges={[
                  { name: "MS SQL", lvl: 2 },
                  { name: "MongoDB", lvl: 1 }
                ]}
              />
              <TableRow
                rowName="Testing"
                rowBadges={[
                  { name: "Enzyme", lvl: 2 },
                  { name: "Jest", lvl: 1 }
                ]}
              />
              <TableRow
                rowName="Tools"
                rowBadges={[
                  { name: "Git", lvl: 1 },
                  { name: "npm", lvl: 2 },
                  { name: "Heroku", lvl: 2 },
                  { name: "Linux", lvl: 2 }
                ]}
              />
              <TableRow
                rowName="Other"
                rowBadges={[{ name: "MS Excel", lvl: 4 }]}
              />
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Additional;
