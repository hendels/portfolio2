import React from "react";
//styles
import "../../css/navbar/navbar-animated.css";
import "../../css/navbar/nav-icon-burger.css";

import { Container, Button } from "react-bootstrap";
// app components
import NavItems from "./navbarItems";
import Logo from "./logo";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
      focusedNavItem: null,
      sideBarOpened: false
    };
    this.handleClickToNavItem = this.handleClickToNavItem.bind(this);
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
  //     console.log("element:::", element, "focusedid::: ", focusedId);
  //     if (element === focusedId) {
  //       document.getElementById(element).classList.add("focused");
  //     } else {
  //       try {
  //         document.getElementById(element).classList.remove("focused");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   }
  // };
  handleClickToNavItem(e, ref, navItem, focus, refComponent, element, sidebar) {
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
              this.setState({ sideBarOpened: false }, () => {
                this.props.animateHomeButtons();
              });
            if (navItem.toLowerCase() === "contact")
              this.setState({ sideBarOpened: false });
          }, 500);
          // find selected nav-item by given navItem id if sidebar is open
          // if (sidebar) this.changeFocusOnNavItem(navItem);
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
        <Logo />
        {/* subbars - project specific - left side bar*/}
        <div id={bikeysh.idSubbar} className="project-specific">
          {elementsSubbarBikeysh}
        </div>
        <div id={googleMap.idSubbar} className="project-specific">
          {elementsSubbarGoogleMap}
        </div>
        {/* standard right side bar */}
        <Container>
          <NavItems
            refs={this.props.refs}
            linksClass="nav-right-links"
            handleClickToNavItem={this.handleClickToNavItem}
            useScrollSpy
          />
        </Container>
        <span className="burger-button">
          <div
            className="nav-icon blocked"
            onClick={() =>
              this.setState({ sideBarOpened: !this.state.sideBarOpened })
            }
          >
            <div className="blocked" />
          </div>
        </span>
        {this.state.sideBarOpened ? (
          <div>
            <div
              className="nav-side-background"
              onClick={() => this.setState({ sideBarOpened: false })}
            />
            <div className="nav-side">
              <NavItems
                refs={this.props.refs}
                linksClass="nav-side-items"
                handleClickToNavItem={this.handleClickToNavItem}
              />
            </div>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
