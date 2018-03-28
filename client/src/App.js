import React, { Component } from 'react';
// import { subscribeToTimer } from './api';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timestamp: 'No timestamp yet.'
    }
    this.handleInput = this.handleInput.bind(this);

  // subscribeToTimer((err, timestamp) => this.setState({
  //   timestamp
  // }));
}

  handleInput(e){
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput}>
          {/* Send the input using a socket event. */}
        </input>
      </div>
    );
  }
}

export default App;
