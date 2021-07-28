import React from "react";
import Todo from "./Todo";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [],
    };
    // TODO: alternative way?
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  handleAddButtonClick() {
    const newTodo = { text: this.state.text, checked: false };
    console.log(`${newTodo.text} added`);
    this.setState({ todos: [ ...this.state.todos, newTodo,] });
    this.state.text = "";
  }

  // TODO: check if works?
  //   handleSubmit(e) {
  //     e.preventDefault();
  //     alert("handle sub");
  //   }

  render() {
    const todoList = this.state.todos.map((t) => (
      <Todo text={t.text} checked={t.checked} />
    ));

    return (
      <div className="App-body">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        <button
          // type="submit"
          onClick={() => this.handleAddButtonClick()}
          onSubmit={this.handleSubmit}
        >
          Add
        </button>
        <ul className="App-todolist">{todoList}</ul>
      </div>
    );
  }
}

export default Content;
