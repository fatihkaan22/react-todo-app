import React from "react";

export default function FilterButton(props) {
  return (
    <button disabled={props.active} onClick={() => props.setFilter(props.name)}>
      {props.name}
    </button>
  );
}
