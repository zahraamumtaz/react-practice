import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "angular",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

    handleSubmit = () => {
      
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        ></input>
        <div>
          <label>Comment</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue.Js</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
