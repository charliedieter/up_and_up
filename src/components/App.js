import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Featured from "./Featured";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:symbol" component={Featured} />
      </div>
    );
  }
}

export default App;
