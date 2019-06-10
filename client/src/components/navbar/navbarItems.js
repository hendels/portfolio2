import React from "react";
import Scrollspy from "react-scrollspy";

class NavItems extends React.Component {
  handleOnUpdateScrollspy = items => {
    // change logo & navitems while ScrollSpy - color handler
    const navItems = document.getElementsByClassName("is-current");
    let element = null;
    for (let i = 0; i < navItems.length; i++) {
      element = navItems.item(i).textContent.toLowerCase();
    }
    const navClasses = [
      "selected-home",
      "selected-about",
      "selected-skills",
      "selected-experience",
      "selected-projects",
      "selected-contact"
    ];
    const currentIndex = items.findIndex(item => item === `section-${element}`);
    for (let i = 0; i < items.length; i++) {
      if (currentIndex === i) {
        document.body
          .getElementsByTagName("nav")[0]
          .classList.add(navClasses[i]);
      } else {
        document.body
          .getElementsByTagName("nav")[0]
          .classList.remove(navClasses[i]);
      }
    }
  };
  render() {
    const { refs, linksClass, handleClickToNavItem, useScrollSpy } = this.props;
    let scrollSpyItems = [
      "section-home",
      "section-about",
      "section-skills",
      "section-experience",
      "section-projects",
      "section-contact"
    ];
    if (!useScrollSpy) scrollSpyItems = [];
    return (
      <span className={`${linksClass}`}>
        <Scrollspy
          items={scrollSpyItems}
          currentClassName="is-current"
          onUpdate={() => this.handleOnUpdateScrollspy(scrollSpyItems)}
          root
          componentTag={"span"}
        >
          <span>
            <a
              className="navItem"
              id="home"
              href="section-home"
              onClick={e => {
                handleClickToNavItem(e, refs.home, "home", true);
              }}
            >
              Home
            </a>
          </span>
          <span>
            <a
              className="navItem"
              id="home"
              href="section-about"
              onClick={e =>
                handleClickToNavItem(e, refs.aboutMe, "about", true)
              }
            >
              About
            </a>
          </span>
          <span>
            <a
              className="navItem"
              id="skills"
              href="section-skills"
              onClick={e =>
                handleClickToNavItem(e, refs.skills, "skills", true)
              }
            >
              Skills
            </a>
          </span>
          <span>
            <a
              className="navItem"
              id="experience"
              href="section-experience"
              onClick={e =>
                handleClickToNavItem(e, refs.experience, "experience", true)
              }
            >
              Experience
            </a>
          </span>
          <span>
            <a
              className="navItem"
              id="projects"
              href="section-projects"
              onClick={e =>
                handleClickToNavItem(e, refs.projects, "projects", true)
              }
            >
              Projects
            </a>
          </span>
          <span>
            <a
              className="navItem"
              id="contact"
              href="section-contact"
              onClick={e =>
                handleClickToNavItem(e, refs.contact, "contact", true)
              }
            >
              Contact
            </a>
          </span>
        </Scrollspy>
      </span>
    );
  }
}

export default NavItems;
