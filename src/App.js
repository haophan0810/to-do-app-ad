import React, { Component } from 'react';
import './App.css';
import Time from './Components/Time';
import TodolList from './Components/TodolList';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.allTime = new Date().getTime();
    
    this.handleKey = this.handleKey.bind(this);
    this.activeJob = this.activeJob.bind(this);
    this.jobsList = [{
      "id": 1,
      "jobName": "Tryon's Woodsia",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 2,
      "jobName": "Poodle-dog Bush",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 3,
      "jobName": "Brown's Indian Rosewood",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 4,
      "jobName": "Rinodina Lichen",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 5,
      "jobName": "Fall Dandelion",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 6,
      "jobName": "Arctomia Lichen",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 7,
      "jobName": "Bigseed Biscuitroot",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 8,
      "jobName": "Funck's Hairsedge",
      "state": true,
      "currentDate": "Today"
    }, {
      "id": 9,
      "jobName": "Celebes Pepper",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 10,
      "jobName": "Honey Mesquite",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 11,
      "jobName": "Largeflower Townsend Daisy",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 12,
      "jobName": "Yellow Avalanche-lily",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 13,
      "jobName": "San Francisco Woodland-star",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 14,
      "jobName": "Plum Pine",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 15,
      "jobName": "Hybrid Balsam Poplar",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 16,
      "jobName": "Yellow Coralbells",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 17,
      "jobName": "Fall Tansyaster",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 18,
      "jobName": "Tube Lichen",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 19,
      "jobName": "Dirinaria Lichen",
      "state": false,
      "currentDate": "Today"
    }, {
      "id": 20,
      "jobName": "Blackseed Spurge",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 21,
      "jobName": "Hairy Townsend Daisy",
      "state": false,
      "currentDate": "Today"
    }, {
      "id": 22,
      "jobName": "Bellyache Bush",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 23,
      "jobName": "Henry's Spiderlily",
      "state": false,
      "currentDate": "Today"
    }, {
      "id": 24,
      "jobName": "Blushing Wild Buckwheat",
      "state": true,
      "currentDate": "Tomorrow"
    }, {
      "id": 25,
      "jobName": "Fringeleaf Tickseed",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 26,
      "jobName": "Pineland Golden Trumpet",
      "state": false,
      "currentDate": "Yesterday"
    }, {
      "id": 27,
      "jobName": "Wingfruit Suncup",
      "state": true,
      "currentDate": "Today"
    }, {
      "id": 28,
      "jobName": "Cyrtandra",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 29,
      "jobName": "Dicranum Moss",
      "state": true,
      "currentDate": "Yesterday"
    }, {
      "id": 30,
      "jobName": "Curly Mitchell Grass",
      "state": true,
      "currentDate": "Today"
    }];
    this.state = {
      currentDate : 'Today',
      jobsList : this.jobsList      
    }    
  }

  handleKey = (e) => {
    if(e.key === "Enter"){
      const input = e.target;
      const valueInput = input.value;
      
      
      let job = {
        id : this.jobsList.length + 1,
        jobName : valueInput,
        state : true,
        currentDate : this.state.currentDate
      }

      this.jobsList.unshift(job);
      console.log('this.jobList :', this.jobsList);
      this.setState({
        jobsList: this.jobsList
      })
      input.value = "";

    }
  }

  getCurrentDate = (currentDate) => {
      this.setState({
        currentDate: currentDate
      })
  }

  activeJob = (id) =>{
    const indexJob = this.jobsList.findIndex( elm => elm.id === id);
    console.log('indexJob :', this.jobsList[indexJob]);
    this.jobsList[indexJob].state = !this.jobsList[indexJob].state;
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
