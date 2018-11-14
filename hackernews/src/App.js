import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const person = {
      firstName: "Kirby",
      lastName: "Campbell"
    };
    var helloWorld = "Welcome to the Road to learn React";
    return (
      <div className="App">
        <h2>
          {" "}
          {helloWorld} <br />
          {person.firstName} motherfuckin' {person.lastName}{" "}
        </h2>
      </div>
    );
  }
}

export default App;
