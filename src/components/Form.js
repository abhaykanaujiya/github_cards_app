import React, { Component } from 'react';
import axios from 'axios';
import "./Card.css";
export default class Form extends Component {
  state = { userName: '' };
  handleSubmit = async (e) => {
    e.preventDefault();
    //// gaearon, sophiebits, sebmarkbage, bvaughn
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );

    console.log(resp.data);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type='text'
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
            placeholder='GitHub username'
            required
          />
          <button>Add card</button>
        </form>
      </div>
    );
  }
}
