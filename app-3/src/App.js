import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      input:"",
      listStuff:['pasta', 'rice', 'bread', 'water']
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(val){
    this.setState({input: val})
  }

  render() {
    var displayList = this.state.listStuff.filter((x, i)=>{
      return x.includes(this.state.input);
    }).map((q, p)=><h2 key={p}>{q}</h2>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={(e)=>this.handleInput(e.target.value)} type="text"></input>
       {displayList} 
      </div>
    );
  }
}

export default App;
