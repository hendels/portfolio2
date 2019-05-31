import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import screenshots from '../config/screenshots';
// styles
import '../css/projects/projects-section.css';

class CvCarousel extends Component {
    // TODO - turn off animation after some value of pixel reach or last element - somehow
    render() {
        console.log('screenshots', screenshots);
        let carouselScreenshots = screenshots.unsplash.map(screenshot => {
            return (
                <div>
                    <img src={screenshot.link} className='carousel-img'/>
                    <p className="legend">{screenshot.label}</p>
                </div>
            )
        })
        return (
            <Carousel 
                dynamicHeight
                emulateTouch
                // width='50vw'
                showThumbs={false}
                showStatus={false}
            >
                {carouselScreenshots}
            </Carousel>
        );
    }
};

export default CvCarousel;