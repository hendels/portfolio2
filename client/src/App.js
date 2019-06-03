import React from "react";
// app
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import SkillsSection from "./components/skillsSection";
import ExperienceSection from "./components/experienceSection";
import CvSection from "./components/cvSection";
// import ProjectSection from "./components/projectContainer";
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
      skills: this.skillsSectionRef,
      experience: this.experienceSectionRef,
      projects: this.projectsSectionRef,
      contact: this.contactSectionRef
    };
    return (
      <div>
        <Navbar refs={refs} />
        <AboutMe refHome={refs.home} />
        <SkillsSection refSkills={refs.skills} />
        <ExperienceSection refExperience={refs.experience} />
        <CvSection />
        <h1>PROJECTS</h1>
        {/* <Tutorial /> */}
        {/* <ProjectSection projectName="Bikeysh" stack={stack} features={features} />
        <ProjectSection
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
