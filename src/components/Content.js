import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";

export default function Content() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  let noChecked = 0;

  todos.forEach((t) => t.checked && noChecked++);

  function handleChange(e) {
    setText(e.target.value);
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((t) => {
      if (id === t.id) {
        return { ...t, checked: !t.checked };
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: "todo-" + nanoid(),
      text: text,
      checked: false,
    };
    // console.log(`${newTodo.text} added`);
    setTodos([...todos, newTodo]);
    setText("");
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((t) => id !== t.id);
    setTodos(updatedTodos);
  }

  const todoList = todos.map((t) => (
    <Todo
      id={t.id}
      key={t.id}
      text={t.text}
      checked={t.checked}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));

  return (
    <div className="App-body">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={text} onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>
      <div>
        <button>All</button>
        <button>Avtive</button>
        <button>Completed</button>
      </div>
      <ul className="App-todolist">{todoList}</ul>
      <div>
        <p>No itmes: {todos.length}</p>
        <p>No checked: {noChecked}</p>
      </div>
    </div>
  );
}
