import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="TODO" />
        {/* <Content todos={todos} setTodos={setTodos} /> */}
        <Content />
      </div>
    );
  }
}

export default App;
