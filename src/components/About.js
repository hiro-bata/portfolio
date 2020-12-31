import React, { Component } from "react";

class About extends Component {
  render() {
    return (
        <div className="about">
            <h1 className="title">About</h1>
            <div className="about-content">
                <div className="about-content-top">
                    <ul>
                        <li>Name：Hiroki Kawabata</li>
                        <li>University：一橋大学 経済学部</li>
                        <li>Birthday：1994/03/13</li>
                    </ul>
                </div>
                <div className="about-content-bottom">
                    <ul>
                        <li>1994/03　東京都出身</li>
                        <li>2012/03　都立国立高校卒業</li>
                        <li>2013/04　一橋大学 経済学部入学</li>
                        <li>2018/03　一橋大学 経済学部卒業</li>
                        <li>2018/04　広告代理店（インターネット広告専業）入社 営業配属</li>
                    </ul>

                </div>
            </div>
        </div>
    );
  }
}

export default About;