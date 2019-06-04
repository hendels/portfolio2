import React from "react";
//styles
import "../css/navbar/navbar-animated.css";
import Scrollspy from "react-scrollspy";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
      focusedNavItem: null
    };
  }
  handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  headerColorChange(refs) {
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
  changeFocusOnNavItem = focusedId => {
    const navItems = document.getElementsByClassName("navItem");
    for (var i = 0; i < navItems.length; i++) {
      const element = navItems.item(i).textContent.toLowerCase();
      if (element === focusedId)
        document.getElementById(element).classList.add("focused");
      else document.getElementById(element).classList.remove("focused");
    }
  };
  handleClickToNavItem(e, ref, focusedId) {
    e.preventDefault();
    this.setState(
      {
        focusedNavItem: focusedId ? focusedId : false
      },
      () => {
        // scroll to given ref
        window.scrollTo(0, ref.current.offsetTop);

        // find selected nav-item by given focusedId
        // this.changeFocusOnNavItem(focusedId);
      }
    );
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
    // window.addEventListener("scroll", debounce(this.handleScroll, 16));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () =>
      this.headerColorChange(this.props.refs)
    );
    // window.removeEventListener("scroll", debounce(this.handleScroll, 16));
  }

  render() {
    const { refs } = this.props;
    const isScrolling = !!this.state.scrollPositionY;
    const scrollSpyItems = [
      "section-home",
      "section-about",
      "section-skills",
      "section-experience",
      "section-projects",
      "section-contact"
    ];
    // console.log(
    //   "debounce::: ",
    //   this.state.scrollPositionY,
    //   " scrolling? ",
    //   isScrolling
    // );
    return (
      <nav>
        <div className="logo">
          <h1>HRDZ</h1>
        </div>
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
                onClick={e => this.handleClickToNavItem(e, refs.home, "home")}
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
                  this.handleClickToNavItem(e, refs.aboutMe, "about")
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
                  this.handleClickToNavItem(e, refs.skills, "skills")
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
                  this.handleClickToNavItem(e, refs.experience, "experience")
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
                  this.handleClickToNavItem(e, refs.projects, "projects")
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
      </nav>
    );
  }
}

export default Navbar;
