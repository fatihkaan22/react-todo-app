import React, { useState } from "react";
import Todo from "./Todo";

export default function Content(props) {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { text: text, checked: false };
    console.log(`${newTodo.text} added`);
    setTodos([...todos, newTodo]);
    setText("");
  }

  const todoList = todos.map((t) => <Todo text={t.text} checked={t.checked} />);

  return (
    <div className="App-body">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>
      <ul className="App-todolist">{todoList}</ul>
    </div>
  );
}
