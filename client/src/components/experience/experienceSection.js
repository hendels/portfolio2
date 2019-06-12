import React from "react";
import Timeline from "react-dual-timeline";
import { Container, Col, Row } from "react-bootstrap";
import { StyleRoot } from "radium";
// styles
import "../../css/experience/experience.css";
// app components
import SectionHeader from "../UI/sectionHeader";
import Blankspace from "../UI/blankSpace";
import SectionDescription from "../UI/sectionDescription";

import TimelineJobEntry from "./timelineDate";

const descriptionText = ``;

const multiplierIcon = "fa-2x";
const jsIcon = <i class={`fab fa-js ${multiplierIcon}`} />;
const workIcon = <i class={`fas fa-laptop-code ${multiplierIcon}`} />;
const userIcon = <i class={`fas fa-user-circle ${multiplierIcon}`} />;
const buildingIcon = <i class={`far fa-building ${multiplierIcon}`} />;
const europeIcon = <i class={`fas fa-globe-europe ${multiplierIcon}`} />;
const starIcon = <i class={`fas fa-star-of-life ${multiplierIcon}`} />;

const ExperienceSection = props => {
  return (
    <section id="section-experience" ref={props.refExperience}>
      <Container>
        <Blankspace />
        <Row noGutters>
          <Col md={3}>
            <SectionHeader
              sectionName={props.sectionName}
              bootstrapClass="bg-warning"
              headerClass="experience-title"
            />
          </Col>
          <Col md={9}>
            <SectionDescription
              descriptionClass="experience-description"
              descriptionHeader={``}
              descriptionText={descriptionText}
            >
              <StyleRoot>
                <Timeline
                  skipEntry
                  activeColor="#f37449"
                  lineColor="#9ad18b"
                  className="time-container"
                  paddingToItem={10}
                  itemPadding={15}
                  circleWidth={40}
                  paddingTop={40}
                  color="#231f20"
                >
                  <TimelineJobEntry
                    icon={starIcon}
                    title="IT Specialist"
                    where="Oleofarm"
                    description="First job! CRM System administration (30+ users), creating excel reports / analysis for operations director."
                    dateRange="09.2009 - 06.2011"
                    // reverseDate
                  />
                  <TimelineJobEntry
                    icon={buildingIcon}
                    title="CRM Specialist"
                    where="Work Service"
                    description={`Programming in VBA (applications for sales dept. / financial dept., sales reports & dashboards for CEO) / CRM System administration (100+ users, multiple countries) / CRM Development`}
                    projects={[
                      "Designing & PM a Mobile Application for organisation & employees"
                    ]}
                    dateRange="05.2012 - 02.2017"
                    reverseDate
                  />
                  <TimelineJobEntry
                    icon={workIcon}
                    title="Microsoft Dynamics NAV Developer"
                    where="Dynamics DC"
                    description={`Programming in C/AL & AL / building, deploying and maintaining solutions for huge ERP platform (programming in financial, warehouse, manufacturing and sales & purchase modules) / resolving customers problems via Service Desk platform`}
                    projects={[
                      "Radio ZET - delivering ERP migration project for one of the two biggest radio players in Poland",
                      "Carrier - writing a complete solution for cooling machine rental business"
                    ]}
                    dateRange="02.2017 - 03.2019"
                    // reverseDate
                  />

                  <TimelineJobEntry
                    icon={jsIcon}
                    title="Junior Front End Developer"
                    where="Promise {<pending>}"
                    description={`I'm looking forward for a new challenges as a React / Redux Front End Developer`}
                    dateRange="Avaible now"
                    reverseDate
                  />
                  {/* <TimelineJobEntry
                    icon={jsIcon}
                    title="title"
                    description="elo elo"
                  />
                  <TimelineJobEntry
                    icon={europeIcon}
                    title="title"
                    description="elo elo"
                    reverseDate
                  /> */}
                  {/* currently looking for new chalenges as junior front end */}

                  {/* <div icon={jsIcon}>
                    <h1>Individual Learning</h1>
                  </div> */}
                </Timeline>
              </StyleRoot>
            </SectionDescription>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
