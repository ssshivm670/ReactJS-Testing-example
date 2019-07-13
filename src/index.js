import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";
// function App() {
//   return (

//   );
// }

// const rootElement = document.getElementById("root");

ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById("root") || document.createElement("div")
);
