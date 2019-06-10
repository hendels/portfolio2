import React from "react";
import { Container } from "react-bootstrap";
// app
import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

import SkillsSection from "./components/skills/skillsSection";
import ExperienceSection from "./components/experienceSection";
import ProjectsSection from "./components/projects/projectHeader";

import ContactForm from "./components/contactForm";
import BlankSpace from "./components/UI/blankSpace";
// import Tutorial from "./components/tutorial";
//styles
import "./css/bootstrap/bootstrap.css";
import "./css/general/main-html.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubbarId: ""
    };
    this.homeSectionRef = React.createRef();

    this.aboutMeSectionRef = React.createRef();
    this.skillsSectionRef = React.createRef();
    this.experienceSectionRef = React.createRef();

    this.projectsSectionRef = React.createRef();

    this.bikeyshComponentRef = React.createRef();
    this.bikeyshSectionRef = React.createRef();
    this.bikeyshEndSectionRef = React.createRef();

    this.googleMapComponentRef = React.createRef();
    this.googleMapSectionRef = React.createRef();
    this.googleMapEndSectionRef = React.createRef();

    this.contactSectionRef = React.createRef();
  }
  animateHomeButtons = async () => {
    const homeButtons = document.body.getElementsByClassName(
      "main-header-item"
    );
    const animateClass = "shadow-pop-long";
    for (let i = 0; i < homeButtons.length; i++) {
      await new Promise((resolve, reject) => {
        homeButtons[i].className += ` ${animateClass}`;
        setTimeout(() => {
          resolve();
        }, 200);
      });
      setTimeout(() => {
        homeButtons[i].className = homeButtons[i].className.substring(
          0,
          homeButtons[i].className.length - animateClass.length + 1
        );
      }, 1000);
    }
  };
  handleChangeSubbar = subbar => {
    this.setState({ currentSubbarId: subbar }, () => {});
  };
  render() {
    const refs = {
      home: this.homeSectionRef,
      aboutMe: this.aboutMeSectionRef,
      skills: this.skillsSectionRef,
      experience: this.experienceSectionRef,
      projects: this.projectsSectionRef,
      bikeyshComponent: this.bikeyshComponentRef,
      bikeysh: this.bikeyshSectionRef,
      bikeyshEnd: this.bikeyshEndSectionRef,
      googleMapComponent: this.googleMapComponentRef,
      googleMap: this.googleMapSectionRef,
      googleMapEnd: this.googleMapEndSectionRef,
      contact: this.contactSectionRef
    };
    const projectBikeysh = {
      id: "bikeysh",
      idSubbar: "subbar_bikeysh",
      name: "Bikeysh",
      elementsSubbar: ["Bikeysh", "Features", "About", "Demo"]
    };
    const projectGoogleMap = {
      id: "googleMap",
      idSubbar: "subbar_googleMap",
      name: "Google Map",
      elementsSubbar: ["GoogleMap", "Features", "About", "Demo"]
    };
    const projects = { bikeysh: projectBikeysh, googleMap: projectGoogleMap };
    return (
      <div>
        <Navbar
          refs={refs}
          navOffAtPixel={200}
          subbarId={this.state.currentSubbarId}
          projects={projects}
          animateHomeButtons={this.animateHomeButtons}
        />
        <Home refs={refs} animateHomeButtons={this.animateHomeButtons} />
        <AboutMe refAboutMe={refs.aboutMe} sectionName="ABOUT-ME" />
        <SkillsSection refSkills={refs.skills} sectionName="SKILLS" />
        <ExperienceSection
          refExperience={refs.experience}
          sectionName="EXPERIENCE"
        />

        <ProjectsSection
          sectionName="PROJECTS"
          refs={refs}
          handleChangeSubbar={this.handleChangeSubbar}
          projects={projects}
        />
        <ContactForm sectionName="CONTACT" refContact={refs.contact} />
        <Container>
          <BlankSpace />
        </Container>
      </div>
    );
  }
}

export default App;
