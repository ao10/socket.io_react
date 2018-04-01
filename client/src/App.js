import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
// import { subscribeToTimer } from './api';


class App extends Component {
  constructor(){
    super();

    this.state = {
      endpoint: "http://localhost:8080",
      color: "white"
    }
    this.handleInput = this.handleInput.bind(this);
  // subscribeToTimer((err, timestamp) => this.setState({
  //   timestamp
  // }));
}

  // Method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    
    // This emits an event to the socket ( your server ) with an argument of 'red'
    // You can make the argument any color you would like, or any kind of data you want to
    socket.emit('change color', this.state.color);
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  }

  setColor = (color) => {
    this.setState({ color });
  }

  handleInput(e){
    console.log(e.target.value);
  }

  render() {
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    const socket = socketIOClient(this.state.endpoint);

    // socket.on is another method that checks for incoming events from the server
    // this method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument

    socket.on('change color', (col) => {
      // Setting the color of our button
      document.body.style.backgroundColor = col;
    })


    return (
      <div style={{textAlign:'center'}}>
        <button onClick={ () => this.send() }>Change Color</button>

        <button id="blue" onClick={ () => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={ () => this.setColor('red')}>Red</button>
      </div>
    );
  }
}

export default App;
