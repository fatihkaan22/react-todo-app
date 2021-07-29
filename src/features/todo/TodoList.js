import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import Todo from "../../components/Todo";
import FilterButton from "../../components/FilterButton";

import {
  addTodo,
  removeTodo,
  selectTodo,
  setInputValue,
  selectInputValue,
  toggleTodo,
} from "./todoListSlice";

export default function TodoList() {
  const todos = useSelector(selectTodo);
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  let noChecked = 0;
  const FILTER_MAP = {
    all: () => true,
    active: (t) => !t.checked,
    completed: (t) => t.checked,
  };
  const FILTER_KEYS = Object.keys(FILTER_MAP);
  const [filter, setFilter] = useState(FILTER_KEYS[0]);
  const filterList = FILTER_KEYS.map((name) => (
    <FilterButton
      active={filter === name}
      key={name}
      name={name}
      setFilter={setFilter}
    />
  ));

  noChecked = todos.filter((t) => t.checked).length;

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: "todo-" + nanoid(),
      text: inputValue,
      checked: false,
    };
    dispatch(addTodo(newTodo));
    dispatch(setInputValue(""));
  }

  const todoList = todos
    .filter(FILTER_MAP[filter])
    .map((t) => (
      <Todo
        id={t.id}
        key={t.id}
        text={t.text}
        checked={t.checked}
        toggleTodo={() => dispatch(toggleTodo(t.id))}
        removeTodo={() => dispatch(removeTodo(t.id))}
      />
    ));

  return (
    <div className="App-body">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>{filterList}</div>
      <ul className="App-todolist">{todoList}</ul>
      <div>
        <p>No itmes: {todos.length}</p>
        <p>No checked: {noChecked}</p>
      </div>
    </div>
  );
}