import React from "react";
// app
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

import SkillsSection from "./components/skillsSection";
import ExperienceSection from "./components/experienceSection";
import CvSection from "./components/cvSection";
import ProjectHeader from "./components/projectHeader";
import ProjectSection from "./components/projectContainer";
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
    this.homeSectionRef = React.createRef();
    this.aboutMeSectionRef = React.createRef();
    this.skillsSectionRef = React.createRef();
    this.experienceSectionRef = React.createRef();
    this.projectsSectionRef = React.createRef();
    this.contactSectionRef = React.createRef();
  }
  render() {
    const projectName = "Bikeysh";
    const features = [`it's RWD`, `search bar`, `tag management`, `crawler`];
    const stack = {
      mongodb: true,
      sass: true,
      react: true,
      RWD: true
    };
    const refs = {
      home: this.homeSectionRef,
      aboutMe: this.aboutMeSectionRef,
      skills: this.skillsSectionRef,
      experience: this.experienceSectionRef,
      projects: this.projectsSectionRef,
      contact: this.contactSectionRef
    };
    return (
      <div>
        <Navbar refs={refs} navOffAtPixel={200} />
        <Home refs={refs} />
        <AboutMe refAboutMe={refs.aboutMe} sectionName="ABTZ" />
        <SkillsSection refSkills={refs.skills} sectionName="SKLZ" />
        <ExperienceSection refExperience={refs.experience} sectionName="EXPZ" />

        {/* <Tutorial /> */}
        <ProjectHeader sectionName="PRTZ" refProjects={refs.projects} />
        <ProjectSection
          showHeader
          colorVariant="variant-1"
          // sectionName="PRTZ"
          // refProjects={refs.projects}
          projectName="Bikeysh"
          stack={stack}
          features={features}
        />
        <ProjectSection
          colorVariant="variant-2"
          sectionName="PRTZ"
          refProjects={refs.projects}
          projectName="Bikeysh"
          stack={stack}
          features={features}
        />
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
