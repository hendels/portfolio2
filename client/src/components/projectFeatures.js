import React from 'react';

class Features extends React.Component {
    render(){
        const features = this.props.features.map(feature => {
            return (
                <li>{feature}</li>
            )
        })
        return(
            <ul>
                {features}
            </ul>
        )
    }
}

export default Features;