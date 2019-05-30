import React from 'react';

const TechnologyStack = (props) => {
    const {mongodb, sass, javascript, css, react, redux} = props.stack;
    return (
        <ul>
            {mongodb ? <li>mongodb</li> : null}
            {sass ? <li>sass</li> : null}
            {javascript ? <li>javascript</li> : null}
            {css ? <li>css</li> : null}
            {react ? <li>react</li> : null}
            {redux ? <li>redux</li> : null}
        </ul>
    )
}

export default TechnologyStack;