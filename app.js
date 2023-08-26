import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import GridCards from './Components/GridCards';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <GridCards/>
       
      </div>
    );
  }
}

export default App;
