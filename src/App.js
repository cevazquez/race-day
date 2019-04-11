import React, { Component } from "react";
import "./App.css";
import NavBar from "./features/Nav/NavBar";
import RaceDashboard from "./features/RaceDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RaceDashboard />
      </div>
    );
  }
}

export default App;
