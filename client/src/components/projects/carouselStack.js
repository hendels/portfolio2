import React, { Component } from "react";
import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import screenshots from "../../config/images";
// styles
import "../../css/projects/projects-section.css";
import "../../css/projects/carousel-technology-stack.css";
class Logos extends Component {
  // TODO - turn off animation after some value of pixel reach or last element - somehow
  render() {
    let carouselElements = screenshots.logos.map(logo => {
      return (
        <div className="logo-icons">
          {logo.iconSvg !== "" ? (
            <div className="icon-svg">
              <img src={logo.iconSvg} />
            </div>
          ) : (
            <i className={`${logo.iconClass} ${logo.specificClass}`} />
          )}
          <p className="carousel-logo-label">{logo.label}</p>
        </div>
      );
    });
    return (
      <Carousel
        autoPlay
        interval={1000}
        transitionTime={500}
        centerMode
        centerSlidePercentage={33}
        infiniteLoop
        // width='50vw'
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
        {carouselElements}
      </Carousel>
    );
  }
}

export default Logos;
