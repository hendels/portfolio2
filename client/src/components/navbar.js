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
  headerColorChange() {
    const scrollChangeHeight = 400;
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
    console.log(`event`, e);
    e.preventDefault();
    this.setState(
      {
        focusedNavItem: focusedId ? focusedId : false
      },
      () => {
        // scroll to given ref
        window.scrollTo(0, ref.current.offsetTop);

        // find selected nav-item by given focusedId
        this.changeFocusOnNavItem(focusedId);
      }
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);
    // window.addEventListener("scroll", debounce(this.handleScroll, 16));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
    // window.removeEventListener("scroll", debounce(this.handleScroll, 16));
  }

  render() {
    const { refs } = this.props;
    const isScrolling = !!this.state.scrollPositionY;
    console.log(
      "debounce::: ",
      this.state.scrollPositionY,
      " scrolling? ",
      isScrolling
    );
    return (
      <nav>
        <div className="logo">
          <h1>HRDZ</h1>
        </div>
        <ul>
          <Scrollspy
            items={["section-home", "section-skills", "section-experience"]}
            currentClassName="is-current"
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

            {/* <li>
            <a
              className="navItem"
              id="projects"
              href="section-experience"
              onClick={() => this.handleClickToNavItem(refs.projects, "projects")}
            >
              Projects
            </a>
          </li> */}
            {/* <li>
            <a
              className="navItem"
              id="contact"
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
