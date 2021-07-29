import React from "react";

export default function Todo(props) {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.checked}></input>
      {props.text}
      {/* <button className="App-Todo-delete" type="button">❌</button> */}
    </li>
  );
}
