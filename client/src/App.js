import React from "react";
// app
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

import SkillsSection from "./components/skillsSection";
import ExperienceSection from "./components/experienceSection";
import CvSection from "./components/cvSection";
import ProjectsSection from "./components/projectHeader";

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
      currentSubbar: ""
    };
    this.homeSectionRef = React.createRef();
    this.aboutMeSectionRef = React.createRef();
    this.skillsSectionRef = React.createRef();
    this.experienceSectionRef = React.createRef();
    this.projectsSectionRef = React.createRef();
    this.contactSectionRef = React.createRef();
    this.bikeyshSectionRef = React.createRef();
    this.googleMapSectionRef = React.createRef();
    this.bikeyshEndSectionRef = React.createRef();
    this.googleMapEndSectionRef = React.createRef();
  }
  handleChangeSubbar = subbar => {
    this.setState({ currentSubbar: subbar }, () => {
      console.log("SUBBAR:::", subbar);
    });
  };
  render() {
    // const projectName = "Bikeysh";

    const refs = {
      home: this.homeSectionRef,
      aboutMe: this.aboutMeSectionRef,
      skills: this.skillsSectionRef,
      experience: this.experienceSectionRef,
      projects: this.projectsSectionRef,
      bikeysh: this.bikeyshSectionRef,
      bikeyshEnd: this.bikeyshEndSectionRef,
      googleMap: this.googleMapSectionRef,
      googleMapEnd: this.googleMapEndSectionRef,
      contact: this.contactSectionRef
    };
    return (
      <div>
        <Navbar
          refs={refs}
          navOffAtPixel={200}
          subbar={this.state.currentSubbar}
        />
        <Home refs={refs} />
        <AboutMe refAboutMe={refs.aboutMe} sectionName="ABTZ" />
        <SkillsSection refSkills={refs.skills} sectionName="SKLZ" />
        <ExperienceSection refExperience={refs.experience} sectionName="EXPZ" />

        {/* <Tutorial /> */}
        <ProjectsSection
          sectionName="PRTZ"
          refs={refs}
          handleChangeSubbar={this.handleChangeSubbar}
        />
        {/* <ProjectSection
          colorVariant="variant-2"
          // sectionName="PRTZ"
          // refProjects={refs.projects}
          projectName="GoogleMaps"
          stack={stack}
          features={features}
        /> */}
        {/* <CvSection /> */}
        {/* <ProjectSection
          projectName="One Page Site"
          stack={stack}
          features={features}
        />
        <ProjectSection
          projectName="Google Map Redux App"
          stack={stack}
          features={features}
        />
        // put this portfolio as a project also
        <ContactForm /> */}
      </div>
    );
  }
}

export default App;
