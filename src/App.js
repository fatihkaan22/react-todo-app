import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="App">
      <Header title="TODO" />
      {/* <Content todos={todos} setTodos={setTodos} /> */}
      <Content />
    </div>
  );
}
