import React from "react";
import { Container } from "react-bootstrap";
// config
import screenshots from "./config/images";
// app
import Navbar from "./components/navbar/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";

import SkillsSection from "./components/skills/skillsSection";
import ExperienceSection from "./components/experience/experienceSection";
import ProjectsSection from "./components/projects/projectHeader";

import ContactForm from "./components/contactForm";
import BlankSpace from "./components/UI/blankSpace";

// import Tutorial from "./components/tutorial";
//styles
import "./css/bootstrap/bootstrap.css";
import "./css/general/main-html.css";

const bikeyshDescription = `Scores offers from popular bike parts market (web scraper) and shows the best ones for specific category. Basing on tags provided by user bikeysh interprets each new scraped record and deduct membership to a given category and name, counted unified name sets shows statistics and scores for each offer listing the best ones on the dashboard. User can do basic operations: search offers, set offers as favorites, hide them from dashboard, add tags with drag and drop view and check the details about each one.`;
const googleMapDescription = `Simple React + Redux application connected to Google Maps JavaScript API (Geocode, Places, Maps) which allow to choose / search locations and add / delete them to the list through the button. Choosing location on the map / list shows details about the place.

Styled with React Material UI.`;
const portfolioDescription = `This site was build in Pure React.JS :)`;
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

    this.portfolioComponentRef = React.createRef();
    this.portfolioSectionRef = React.createRef();
    this.portfolioEndSectionRef = React.createRef();

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
      portfolioComponent: this.portfolioComponentRef,
      portfolio: this.portfolioSectionRef,
      portfolioEnd: this.portfolioEndSectionRef,
      contact: this.contactSectionRef
    };
    const projectBikeysh = {
      id: "bikeysh",
      demoLink: "https://infinite-sierra-81519.herokuapp.com",
      gitLink: "https://github.com/pharendarz/bikeysh2",
      idSubbar: "subbar_bikeysh",
      name: "Bikeysh",
      elementsSubbar: ["Bikeysh", "Features", "About", "Demo"],
      technology: [
        "mongodb",
        "react",
        "nodejs",
        "materialui",
        "js",
        "css",
        "html"
      ],
      screenshots: screenshots.bikeysh,
      about: bikeyshDescription
    };
    const projectGoogleMap = {
      id: "googleMap",
      demoLink: "http://my-redux-approach.herokuapp.com/",
      gitLink: "https://github.com/pharendarz/google-maps-search-redux-app",
      idSubbar: "subbar_googleMap",
      name: "Google Map",
      elementsSubbar: ["Google Map", "Features", "About", "Demo"],
      technology: ["js", "materialui", "react", "redux"],
      screenshots: screenshots.googleMap,
      about: googleMapDescription
    };
    const projectPortfolio = {
      id: "portfolio",
      demoLink: undefined,
      gitLink: "https://github.com/hendels/portfolio2",
      idSubbar: "subbar_portfolio",
      name: "React Portfolio",
      elementsSubbar: ["React Portfolio", "Features", "About"],
      technology: ["js", "bootstrap", "react", "css", "html"],
      screenshots: screenshots.portfolio,
      about: portfolioDescription
    };
    const projects = {
      bikeysh: projectBikeysh,
      googleMap: projectGoogleMap,
      portfolio: projectPortfolio
    };
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
          <BlankSpace />
        </Container>
      </div>
    );
  }
}

export default App;
