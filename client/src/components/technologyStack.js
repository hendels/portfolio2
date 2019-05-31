import React from 'react';
import CarouselStack from '../components/carouselStack';

const TechnologyStack = (props) => {
    const {mongodb, sass, javascript, css, react, redux, RWD, heroku} = props.stack;
    return (
        <CarouselStack/>
        // <ul>
        //     {mongodb ? <li>mongodb</li> : null}
        //     {sass ? <li>sass</li> : null}
        //     {javascript ? <li>javascript</li> : null}
        //     {css ? <li>css</li> : null}
        //     {react ? <li>react</li> : null}
        //     {redux ? <li>redux</li> : null}
        //     {RWD ? <li>RWD</li> : null}
        //     {heroku ? <li>Heroku</li> : null}
        // </ul>
    )
}

export default TechnologyStack;