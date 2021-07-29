import "./App.css";
import React from "react";
import Header from "./components/Header";
import TodoList from "./features/todo/TodoList"

export default function App() {
  return (
    <div className="App">
      <Header title="TODO" />
      <TodoList />
    </div>
  );
}
