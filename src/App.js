import React, { Component } from "react";
import Header from "./component/header";
import "./app.scss";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
