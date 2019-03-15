import React, { Component } from "react";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

import "./iconfont/css/fontello.css";
import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="eats">
          <Header />
          <div className="eats-wrapper">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
