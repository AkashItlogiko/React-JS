import React, { Component } from 'react';

export default class Index1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      const {count} = this.state;
      <div>
        <h1>Count : {count} </h1>
        <button>Incerement</button>
      </div>
    );
  }
}
