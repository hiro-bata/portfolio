import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Layout>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/work" component={Work}></Route>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App;
