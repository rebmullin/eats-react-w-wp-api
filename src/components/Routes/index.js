import { Route } from "react-router-dom";
import React, { Component } from "react";
import Post from "../Post";
import Posts from "../Posts";
import Page from "../Page";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Page} />
        <Route exact path="/blog" component={Posts} />
        <Route exact path="/blog/:slug" component={Post} />
        <Route exact path="/about-us" component={Page} />
        <Route exact path="/contact" component={Page} />
      </React.Fragment>
    );
  }
}

export default Routes;
