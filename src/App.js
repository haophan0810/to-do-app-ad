import React, { Component } from 'react';
import './App.css';
import Time from './Components/Time';
import TodolList from './Components/TodolList';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.allTime = new Date().getTime();
    this.idCount = 0;
    this.handleKey = this.handleKey.bind(this);
    this.activeJob = this.activeJob.bind(this);
    this.jobsList = [];
    this.state = {
      currentDate : 'Today',
      jobsList : this.jobsList      
    }    
  }

  handleKey = (e) => {
    if(e.key === "Enter"){
      const input = e.target;
      const valueInput = input.value;
      this.idCount++;
      
      let job = {
        id : this.idCount,
        jobName : valueInput,
        state : true,
        currentDate : this.state.currentDate
      }

      this.jobsList.push(job);
      console.log('this.jobList :', this.jobsList);
      this.setState({
        jobsList: this.jobsList
      })

    }
  }

  getCurrentDate = (currentDate) => {
      this.setState({
        currentDate: currentDate
      })
  }

  activeJob = (id) =>{
    this.jobsList[id-1].state = !this.jobsList[id-1].state;
    this.setState({
      jobsList: this.jobsList
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h2>TO DO LIST</h2>
        </div>
        <Time time = {this.allTime} getCurrentDate = {this.getCurrentDate} />
        <div className="Form-enter-job">
          <input type="text" className="Add-job" placeholder='Add jobs' 
          disabled={this.state.currentDate === 'Yesterday' ? 'disabled' : false}
          onKeyPress = {this.handleKey}
          />
        </div>
        <TodolList 
        jobsList = {this.state.jobsList} 
        currentDate = {this.state.currentDate}
        activeJob={this.activeJob}
        />
      
      </div>
    );
  }
}

export default App;
