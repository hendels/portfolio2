import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import screenshots from '../config/screenshots';
// styles
import '../css/projects/projects-section.css';

class Logos extends Component {
    // TODO - turn off animation after some value of pixel reach or last element - somehow
    render() {
        let carouselScreenshots = screenshots.logos.map(logo => {
            return (
                <div>
                    <img src={logo.link} className='logo-img'/>
                    <p className="legend">{logo.label}</p>
                </div>
            )
        })
        return (
            <Carousel 
                // autoPlay
                interval={1000}
                transitionTime={1000}
                centerMode
                centerSlidePercentage={50}
                emulateTouch
                infiniteLoop
                // width='50vw'
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                {carouselScreenshots}
            </Carousel>
        );
    }
};

export default Logos;