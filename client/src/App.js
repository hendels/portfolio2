import React from "react";
// app
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

import SkillsSection from "./components/skills/skillsSection";
import ExperienceSection from "./components/experienceSection";
import CvSection from "./components/cvSection";
import ProjectsSection from "./components/projects/projectHeader";

// import ProjectSection2 from "./components/projectContainer2";
// import ContactForm from "./components/contactForm";
// import Tutorial from "./components/tutorial";
//styles
// import "./css/styles.css";
import "./css/bootstrap/bootstrap.css";
//
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
      // new Promise((resolve, reject) => {
      setTimeout(() => {
        homeButtons[i].className = homeButtons[i].className.substring(
          0,
          homeButtons[i].className.length - animateClass.length + 1
        );
        // resolve();
      }, 1000);
      // });
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
        <AboutMe refAboutMe={refs.aboutMe} sectionName="ABTZ" />
        <SkillsSection refSkills={refs.skills} sectionName="SKLZ" />
        <ExperienceSection refExperience={refs.experience} sectionName="EXPZ" />

        <ProjectsSection
          sectionName="PRTZ"
          refs={refs}
          handleChangeSubbar={this.handleChangeSubbar}
          projects={projects}
        />
        {/* <CvSection /> */}
        {/* <ContactForm /> */}
      </div>
    );
  }
}

export default App;
