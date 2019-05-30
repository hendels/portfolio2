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
  const stack = {
      mongodb: true,
      sass: true,
      react: true
  }
  return (
    <div >
        <Navbar/>
        <AboutMe/>
        <SkillsSection/>
        <ExperienceSection/>
        <CvSection/>
        <ProjectSection projectName='Bikeysh' stack={stack}/>
        <ProjectSection projectName='One Page Site' stack={stack}/>
        <ProjectSection projectName='Google Map Redux App' stack={stack}/>
        <ContactForm/>
    </div>
  );
}

export default App;
