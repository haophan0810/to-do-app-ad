import React, { Component } from 'react';
import DateTime from './DateTime';
import '../Time.css';

class Time extends Component {
    constructor(props){
        super(props);
        this.secondsOnDay = 24 * 3600 * 1000;
        // this.changeActive = this.changeActive.bind(this);
        this.state = {
            active: {
                Yesterday : ' ',
                Today : 'Active',
                Tomorrow : ' '
            }
        }
    }
    getFullDate(allTime){
        const times = new Date(allTime);
        const year = times.getFullYear();
        const month = times.getMonth()+1;
        const date = times.getDate();
        return `${date} - ${month} - ${year}`;
    }

    changeActive = (dayName) => {
        console.log('dayName :', dayName);
        this.setState({
            active: {
                Yesterday : '',
                Today : '',
                Tomorrow : ''
            }
        });
        this.setState({
           active: { [dayName]: 'Active'}
        })
    }

    render() {
        return (
            <div className= 'Time-wrap'>
                <DateTime 
                dayName = 'Yesterday' 
                day ={this.getFullDate(this.props.time - this.secondsOnDay)} 
                active = {this.state.active.Yesterday}
                handleActive = {this.changeActive}
                />

                <DateTime
                dayName = 'Today' 
                day={this.getFullDate(this.props.time)} 
                active = {this.state.active.Today}
                handleActive = {this.changeActive}
                />


                <DateTime 
                dayName = 'Tomorrow'
                day={this.getFullDate(this.props.time + this.secondsOnDay)}
                active = {this.state.active.Tomorrow}
                handleActive = {this.changeActive}
                />

            </div>
        );
    }
}

export default Time;