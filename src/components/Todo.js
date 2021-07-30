import React from "react";

export default function Todo(props) {
  return (
    <div className="App-Todo-item">
      <input
        type="checkbox"
        defaultChecked={props.checked}
        onChange={() => props.toggleTodo(props.id)}
      ></input>
      {props.text}
      <button
        className="App-Todo-delete"
        type="button"
        onClick={() => props.removeTodo(props.id)}
      >
        ❌
      </button>
    </div>
  );
}
