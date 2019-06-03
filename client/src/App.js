import React from "react";
// app
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import ExperienceSection from "./components/experienceSection";
import CvSection from "./components/cvSection";
import ProjectSection from "./components/projectContainer";
import ProjectSection2 from "./components/projectContainer2";
import SkillsSection from "./components/skillsSection";
import ContactForm from "./components/contactForm";
import Tutorial from "./components/tutorial";
//styles
import "./css/styles.css";
import "./css/bootstrap/bootstrap.css";
//
const App = () => {
  const projectName = "Bikeysh";
  const features = [`it's RWD`, `search bar`, `tag management`, `crawler`];
  const stack = {
    mongodb: true,
    sass: true,
    react: true,
    RWD: true
  };
  return (
    <div>
      <Navbar />
      <AboutMe />
      <SkillsSection />
      <ExperienceSection />
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
};

export default App;
