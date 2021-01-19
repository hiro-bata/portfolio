import React, { Component } from "react";
import Card from "./Card"
import ProLabo from '../images/workplace-sharing.jpeg';
import TimeManage from "../images/time-manage.jpeg"
import ReactApp from "../images/schedule.png"
import Portfolio from "../images/portfolio.png"
import Judge from "../images/judge.png"
import Dog from "../images/dog.png"
import Header from "./Header"


class Work extends Component {
  render() {
    return (
        <div className="work">
            <Header />
            <h1 className="title">~Work~</h1>
            <div className="work-content">
                    <Card title="Task App" desc="Reactで実装したスケジュール管理アプリ。ログインした管理者のみ予定編集が可能。日々の行動記録を公開し、自分を律している。" link="https://task-6c135.web.app/" img={ReactApp}/>
                    <Card title="PRO LABO" desc="一人作業が捗るカフェやレストランをシェアするRailsアプリ。ログインしていないくても、投稿の閲覧と最寄駅をもとにした検索が可能。ユーザー登録・ログインを行えば、新規投稿やお気に入り追加ができる。" link="https://workplace-sharing.herokuapp.com/" img={ProLabo}/>
                    <Card title="Portfolio" desc="Reactで実装したPortfolioサイト。" link="https://portfolio-e9886.web.app/" img={Portfolio}/>
                    <Card title="Time-manage" desc="実行したアクションと時間を記録することで、1日のうち、何に何時間かけているかを可視化し、時間の有効活用に役立てるRailsアプリ。AWS上でデプロイ。" link="https://time-manage-0603.herokuapp.com/" img={TimeManage}/>
                    <Card title="Judge" desc="選択肢を入力し、Judgeボタンを押すと、選択肢の中からランダムで1つが選ばれるReactアプリ。判断に迷ったら使用。" link="https://judge-69905.web.app/" img={Judge}/>
                    <Card title="Dog-image" desc="犬の画像をAPIで引っ張って表示するReactアプリ。APIの練習目的で作成。リロードするごとに画像が変更される。セレクトボックスで柴犬と秋田犬の画像切り替えが可能。" link="https://dog-image.web.app/" img={Dog}/>
            </div>
        </div>
    );
  }
}

export default Work;