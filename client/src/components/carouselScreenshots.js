import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import screenshots from "../config/screenshots";
// styles
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/projects/projects-section.css";
import "../css/projects/carousel-projects.css";

class CvCarousel extends Component {
  // TODO - turn off animation after some value of pixel reach or last element - somehow
  render() {
    console.log("screenshots", screenshots);
    let carouselScreenshots = screenshots.unsplash.map(screenshot => {
      return (
        <div>
          <img src={screenshot.link} className="carousel-img" />
          <p className="screenshot-feature" ref={this.props.refEndProject}>
            {screenshot.label}
          </p>
        </div>
      );
    });
    return (
      <Carousel
        dynamicHeight
        emulateTouch
        // width='50vw'
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {carouselScreenshots}
      </Carousel>
    );
  }
}

export default CvCarousel;
