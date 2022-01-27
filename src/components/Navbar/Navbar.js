import React, { Component } from 'react'
import "./Navbar.css"
import { MenuItems } from './MenuItems';
import { Button } from '../Button';

class Navbar extends Component {
    state = {clicked: false}
    mouseClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <a href="#" className="nav-logo">React <i className="fab fa-react"></i></a>
                <div className="menu-icon" onClick={this.mouseClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-links-group active" : "nav-links-group"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}><a href={item.url} className={item.cName}> {item.title} </a></li>
                        );
                    })}
                    
                </ul>
                <Button>Sign Up</Button>
            </nav>
            
            
        )
    };
        
}

export default Navbar;