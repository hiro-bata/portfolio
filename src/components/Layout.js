import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component{

    render(){
        return (
            <div>
                {this.props.children}
                <Link to="/">Home</Link><br/>
                <Link to="/about">About</Link><br/>
                <Link to="/work">Work</Link>
            </div>
        );
    }
}

export default Layout;