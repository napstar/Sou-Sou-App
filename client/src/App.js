import React, { Component } from 'react';
import './App.css';
import { Button} from 'mdbreact';


import Landing from './Components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>

    )
  }
}

export default App;
