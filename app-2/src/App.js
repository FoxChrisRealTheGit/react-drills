import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      arrata: ['item 1', 'item 2', 'item 3']
    }
  }


  render() {
    var arrata = this.state.arrata.map((x)=>{
      return <h2>{x}</h2>
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          {arrata}
       
      </div>
    );
  }
}

export default App;
