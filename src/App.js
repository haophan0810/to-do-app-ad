import React, { Component } from 'react';
import './App.css';
import Time from './Components/Time';
import TodolList from './Components/TodolList';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.allTime = new Date().getTime();
    this.state = {
      name:'hao'
    }
    
  }

     

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h2>TO DO LIST</h2>
        </div>
        <Time time = {this.allTime} />
        <div className="Form-enter-job">
          <input type="text" className="Add-job" placeholder='Add jobs'/>
        </div>
        <TodolList />
      
      </div>
    );
  }
}

export default App;
