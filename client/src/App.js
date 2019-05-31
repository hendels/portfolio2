import React from 'react';
// app
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import ExperienceSection from './components/experienceSection';
import CvSection from './components/cvSection';
import ProjectSection from './components/projectContainer';
import SkillsSection from './components/skillsSection';
import ContactForm from './components/contactForm';
//styles
import './css/styles.css'
const App = () =>  {
  const projectName = 'Bikeysh';
  const features = [
    `it's RWD`,
    `search bar`,
    `tag management`,
    `crawler`
  ]
  const stack = {
      mongodb: true,
      sass: true,
      react: true,
      RWD: true,
  };
  return (
    <div >
        <Navbar/>
        <AboutMe/>
        <SkillsSection/>
        <ExperienceSection/>
        <CvSection/>
        <h1>PROJECTS</h1>
        <ProjectSection projectName='Bikeysh' stack={stack} features={features}/>
        <ProjectSection projectName='One Page Site' stack={stack} features={features}/>
        <ProjectSection projectName='Google Map Redux App' stack={stack} features={features}/>
        <ContactForm/>
    </div>
  );
}

export default App;
