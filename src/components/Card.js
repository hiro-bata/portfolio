import React, { Component } from "react";

class Card extends Component{

    render(){
        return(
            <div className="card">
                <a href={this.props.link}>
                    <img src={this.props.img}/>
                    <div className="card-text">
                        <div className="card-title">
                            {this.props.title}
                        </div>
                        <div className="card-desc">
                            {this.props.desc}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Card