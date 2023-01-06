import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { Button } from "antd";
import { get } from "./model/axios";
import React, { Component } from "react";

class MyButton extends Component {
  handleClick() {
    get("ping").then(function (res) {
      console.log(res);
    });
  }

  state = {};
  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        Primary
      </Button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton></MyButton>
      </header>
    </div>
  );
}

export default App;
