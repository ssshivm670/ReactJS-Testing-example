import React, { Component } from "react";
import Header from "./component/header";
import "./app.scss";
import Headline from "./component/headline";

const tempArr = [
  {
    fname: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Headline
          header={"Post"}
          desc={"this is a post description"}
          tempArr={tempArr}
        />
      </div>
    );
  }
}
