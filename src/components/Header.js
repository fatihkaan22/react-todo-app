import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;