import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" defaultChecked={this.props.checked}></input>
        {this.props.text}
        {/* <button className="App-Todo-delete" type="button">❌</button> */}
      </li>
    );
  }
}

export default Todo;
