import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoValue: ""
    };
  }

  handleChange = event => {
    this.setState({ newTodoValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("HANDLE SUBMIT EVENT: ", event.target.newTodo.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="newTodo"
            placeholder="Add TODO..."
            value={this.state.newTodoValue}
            onChange={this.handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
