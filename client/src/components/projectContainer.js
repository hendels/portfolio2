import React from 'react';
// style
import '../css/projects/projects-section.css';
// app components
import Carousel from '../components/carousel';
import TechnologyStack from '../components/technologyStack';

class ProjectContainer extends React.Component {
    state = {
        activeComponent: 'imageSlider'
    }
    handleChangeElement = (element) => {
        this.setState({activeComponent: element})
    }
    render() {
        // TODO >> pass technology stack in props

        let activeComponent;
        switch(this.state.activeComponent){
            case 'imageSlider':
                activeComponent = <Carousel /> 
                break;
            case 'stack':
                activeComponent = <TechnologyStack className='technology-stack' stack={this.props.stack}/> 
                break;
            case 'information':
                activeComponent = <Carousel /> 
                break;
            case 'features':
                activeComponent = <Carousel /> 
                break;
            case 'demo':
                activeComponent = <Carousel /> 
                break;
            default:
                break;
        }
        return (
            <div>
                <h1>PROJECTS</h1>
                <h2>{this.props.projectName}</h2>
                <div className='container'>
                    <div className='left-container'>
                        {activeComponent}
                    </div>
                    <ul>
                        <li className='stack'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('imageSlider')}>Screenshots</a>
                        </li>
                        <li className='stack'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('stack')}>Stack</a>
                        </li>
                        <li className='info'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('information')}>Information</a>
                        </li>
                        <li className='features'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('features')}>Features</a>
                        </li>
                        <li className='demo'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('demo')}>Live Demo</a>
                        </li>
                        <li className='git'>
                            <a className='project-btn' onClick={()=>this.handleChangeElement('git')}>Git</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectContainer;