import React from 'react'
import '../css/aboutme/aboutMe.css';

class AboutMe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
        this.handleFlip = this.handleFlip.bind(this);
    }
    handleFlip(){
        this.setState({flipped: !this.state.flipped});
    }
    render(){
        return (
            <section className="top-container">
                {/* left section */}
                <div className="showcase">
                    <h1>{this.state.flipped ? 'My name is Przemy' : 'My name is Przemek.'}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores earum modi rerum impedit! Voluptatibus, 
                        nemo reprehenderit!
                    </p>

                    <a href="" className="linkedIn-link">linkedin link</a>
                    <a href="" className="git-link">git link</a>
                    <a href="" className="email">pharendarz@gmail.com</a>

                    <a className="flipBtn" onClick={this.handleFlip}>{this.state.flipped ? 'Proffesional' : 'Flip'} </a>
                </div>
                {/*  rgiht section */}
                <div className="top-box top-box-a">
                    <h4>blank</h4>
                    <p className="price">blank</p>
                    <a href="" className="btn">blank</a>
                </div>
                <div className="top-box top-box-b">
                    <h4>blank</h4>
                    <p className="price">blank</p>
                    <a href="" className="btn">blank</a>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores earum modi rerum impedit! Voluptatibus, 
                        nemo reprehenderit!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores earum modi rerum impedit! Voluptatibus, 
                        nemo reprehenderit!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores earum modi rerum impedit! Voluptatibus, 
                        nemo reprehenderit!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores earum modi rerum impedit! Voluptatibus, 
                        nemo reprehenderit!
                    </p>
                </div>
            </section>
        )
    }
}

export default AboutMe;