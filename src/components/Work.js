import React, { Component } from "react";
import Card from "./Card"
import ProLabo from '../images/workplace-sharing.jpeg';
import TimeManage from "../images/time-manage.jpeg"
import ReactApp from "../images/schedule.png"
import Portfolio from "../images/portfolio.png"
import Header from "./Header"

class Work extends Component {
  render() {
    return (
        <div className="work">
            <Header />
            <h1 className="title">~Work~</h1>
            <div className="work-content">
                <Card title="React App" desc="Reactで実装したスケジュール管理アプリ" link="https://task-6c135.web.app/" img={ReactApp}/>
                <Card title="PRO LABO" desc="一人作業が捗るカフェやレストランをシェアするRailsアプリ。ログインしていないくても、投稿の閲覧と最寄駅をもとにした検索が可能。ユーザー登録・ログインを行えば、新規投稿やお気に入り追加ができる。" link="https://workplace-sharing.herokuapp.com/" img={ProLabo}/>
                <Card title="Portfolio" desc="Reactで実装したPortfolioサイト" link="" img={Portfolio}/>
                <Card title="Time-manage" desc="実行したアクションと時間を記録することで、1日のうち、何に何時間かけているかを可視化し、時間の有効活用に役立てるRailsアプリ。AWS上でデプロイ。" link="https://time-manage-0603.herokuapp.com/" img={TimeManage}/>
            </div>
        </div>
    );
  }
}

export default Work;