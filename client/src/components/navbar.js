import React from 'react';
//styles
import '../css/navbar/navbar-animated.css';
import logo from '../img/whippet_logo.jpg';

class Navbar extends React.Component {
    state = {
        focusedNavItem: null,
      };
    headerColorChange() {
        const scrollChangeHeight = 400;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > scrollChangeHeight) {
            document.body.getElementsByTagName("nav")[0].classList.remove('black');
            document.body.getElementsByTagName("nav")[0].classList.add('black');
        } else {
            document.body.getElementsByTagName("nav")[0].classList.add('black');
            document.body.getElementsByTagName("nav")[0].classList.remove('black');
        }
    }
    
    handleClickToNavItem(windowPositionY, focusedId) {
        this.setState({
            focusedNavItem: focusedId ? focusedId : false,
        }, ()=> {
            window.scrollTo({top: windowPositionY, behavior: "smooth"});
            console.log('focused:::', this.state.focusedNavItem)
            var navItems = document.getElementsByClassName("navItem");
            for(var i = 0; i < navItems.length; i++)
            {   
                const element = navItems.item(i).textContent.toLowerCase()
                if(element === focusedId)
                    document.getElementById(element).classList.add('focused');
                else
                    document.getElementById(element).classList.remove('focused');
                    
                console.log('item:::', navItems.item(i).textContent)
            }
        });

    }

    componentDidMount() {
        window.addEventListener("scroll", this.headerColorChange);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.headerColorChange);
    }
    render() {

        return (
            // <div className="wrapper">
                <nav>
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                    <ul>
                        <li>
                            <a className='navItem' id='home' onClick={()=>this.handleClickToNavItem(0, 'home')} >Home</a>
                        </li>
                        <li>
                            <a className='navItem' id='about' onClick={()=>this.handleClickToNavItem(400, 'about') }>About</a>
                        </li>
                        <li>
                            <a className='navItem' id='prices' onClick={()=>this.handleClickToNavItem(800, 'prices')} >Prices</a>
                        </li>
                        <li>
                            <a className='navItem' id='contact' onClick={()=>this.handleClickToNavItem(1200, 'contact') } >Contact</a>
                        </li>
                    </ul>
                </nav>
            // </div>
        )
    }
}

export default Navbar;