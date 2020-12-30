import React, { Component } from "react";
import Animation from "./Animation"
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div className="home">
            <div className="home-content">
                <Animation className="animation"/>
                <h1 className="name">Hiroki Kawabata</h1>
                <div className="home-button">
                    <button><Link to="/about">About</Link></button>
                    <button><Link to="/work">Work</Link></button>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;