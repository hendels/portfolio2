import React from "react";
//styles
import "../css/navbar/navbar-animated.css";
import Scrollspy from "react-scrollspy";
import { Container } from "react-bootstrap";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
      focusedNavItem: null
    };
  }

  headerColorChange() {
    const scrollChangeHeight = this.props.navOffAtPixel;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > scrollChangeHeight) {
      document.body.getElementsByTagName("nav")[0].classList.remove("black");
      document.body.getElementsByTagName("nav")[0].classList.add("black");
    } else {
      document.body.getElementsByTagName("nav")[0].classList.add("black");
      document.body.getElementsByTagName("nav")[0].classList.remove("black");
    }
  }
  // changeFocusOnNavItem = focusedId => {
  //   const navItems = document.getElementsByClassName("navItem");
  //   for (var i = 0; i < navItems.length; i++) {
  //     const element = navItems.item(i).textContent.toLowerCase();
  //     if (element === focusedId)
  //       document.getElementById(element).classList.add("focused");
  //     else document.getElementById(element).classList.remove("focused");
  //   }
  // };
  handleClickToNavItem(e, ref, navItem, focus, refComponent, element) {
    e.preventDefault();
    if (focus)
      this.setState(
        {
          focusedNavItem: navItem ? navItem : false
        },
        async () => {
          // scroll to given ref
          window.scrollTo(0, ref.current.offsetTop);
          // animate buttons after scroll to home position with some delay
          setTimeout(() => {
            if (navItem.toLowerCase() === "home")
              this.props.animateHomeButtons();
          }, 500);
          // find selected nav-item by given navItem id
          // this.changeFocusOnNavItem(navItem);
        }
      );
    else window.scrollTo(0, ref.current.offsetTop);
    // set state to given component ref
    if (element)
      switch (element.toLowerCase()) {
        case "features":
          refComponent.current.setState(
            { about: false, features: !refComponent.current.state.features },
            () => {}
          );
          break;
        case "about":
          refComponent.current.setState(
            { about: !refComponent.current.state.about, features: false },
            () => {}
          );
          break;
        default:
          break;
      }
  }
  handleOnUpdateScrollspy = items => {
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
  componentDidMount() {
    window.addEventListener("scroll", () =>
      this.headerColorChange(this.props.refs)
    );
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () =>
      this.headerColorChange(this.props.refs)
    );
  }

  render() {
    const { refs, subbarId } = this.props;
    const scrollSpyItems = [
      "section-home",
      "section-about",
      "section-skills",
      "section-experience",
      "section-projects",
      "section-contact"
    ];
    const { bikeysh, googleMap } = this.props.projects;
    const elementsSubbarBikeysh = bikeysh.elementsSubbar.map(
      (element, index) => {
        return (
          <span
            className={index === 0 ? "project-specific-name" : null}
            onClick={e =>
              this.handleClickToNavItem(
                e,
                refs.bikeysh,
                "",
                false,
                refs.bikeyshComponent,
                element
              )
            }
          >
            {element}
          </span>
        );
      }
    );
    const elementsSubbarGoogleMap = googleMap.elementsSubbar.map(
      (element, index) => {
        return (
          <span
            className={index === 0 ? "project-specific-name" : null}
            onClick={e =>
              this.handleClickToNavItem(
                e,
                refs.googleMap,
                "",
                false,
                refs.googleMapComponent,
                element
              )
            }
          >
            {element}
          </span>
        );
      }
    );
    return (
      <nav>
        <div className="logo">
          <h1>HRDZ</h1>
        </div>
        {/* subbars - project specific - left side bar*/}
        <div id={bikeysh.idSubbar} className="project-specific">
          {elementsSubbarBikeysh}
        </div>
        <div id={googleMap.idSubbar} className="project-specific">
          {elementsSubbarGoogleMap}
        </div>
        {/* standard right side bar */}
        <Container>
          <ul>
            <Scrollspy
              items={scrollSpyItems}
              currentClassName="is-current"
              onUpdate={() => this.handleOnUpdateScrollspy(scrollSpyItems)}
              root
            >
              <li>
                <a
                  className="navItem"
                  id="home"
                  href="section-home"
                  onClick={e =>
                    this.handleClickToNavItem(e, refs.home, "home", true)
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="navItem"
                  id="home"
                  href="section-about"
                  onClick={e =>
                    this.handleClickToNavItem(e, refs.aboutMe, "about", true)
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="navItem"
                  id="skills"
                  href="section-skills"
                  onClick={e =>
                    this.handleClickToNavItem(e, refs.skills, "skills", true)
                  }
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="navItem"
                  id="experience"
                  href="section-experience"
                  onClick={e =>
                    this.handleClickToNavItem(
                      e,
                      refs.experience,
                      "experience",
                      true
                    )
                  }
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  className="navItem"
                  id="projects"
                  href="section-projects"
                  onClick={e =>
                    this.handleClickToNavItem(
                      e,
                      refs.projects,
                      "projects",
                      true
                    )
                  }
                >
                  Projects
                </a>
              </li>
              {/* <li>
            <a
              className="navItem"
              id="contact"
              href="section-contact"
              onClick={() =>
                this.handleClickToNavItem(refs.contact, "contact")
              }
            >
              Contact
            </a>
          </li> */}
            </Scrollspy>
          </ul>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
