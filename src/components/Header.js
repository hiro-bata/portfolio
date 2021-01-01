import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{

    render(){
        return(
            <header>
                <div>
                    <ul className="header-content">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/work"><li>Work</li></Link>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header