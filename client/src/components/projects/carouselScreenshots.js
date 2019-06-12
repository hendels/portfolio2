import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
// import screenshots from "../../config/images";
// styles
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../css/projects/projects-section.css";
import "../../css/projects/carousel-projects.css";

class CvCarousel extends Component {
  // TODO - turn off animation after some value of pixel reach or last element - somehow
  render() {
    const { turnOffElements, refEndProject, screenshots } = this.props;
    let carouselScreenshots = screenshots.map(screenshot => {
      return (
        <div>
          <img
            src={screenshot.link}
            className={`${turnOffElements ? "add-blur" : null}`}
            alt="unable to load image."
          />
          <p
            className={`screenshot-feature ${
              turnOffElements ? "hide-element" : null
            }`}
            ref={refEndProject}
          >
            {screenshot.label}
          </p>
        </div>
      );
    });
    return (
      <Carousel
        // dynamicHeight
        autoPlay={!turnOffElements}
        emulateTouch={!turnOffElements}
        // width='50vw'
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={!turnOffElements}
      >
        {carouselScreenshots}
      </Carousel>
    );
  }
}

export default CvCarousel;
