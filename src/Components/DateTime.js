import React, { Component } from 'react';

class DateTime extends Component {
    constructor(props){
        super(props);
        // this.handleActive = this.handleActive.bind(this);
        this.state = {

        }
    }

    handleActive = (e)=>{
        const {dayName} = this.props;   
        this.props.handleActive(dayName);
    }


    render() {
        return (
            
            <div className={`Date-time ${this.props.active}`} onClick = {this.handleActive}>
                <div className="Title-day">
                    {this.props.dayName}
                </div>
                <div className="Days">
                    {this.props.day}
                </div>
            </div>
        );
    }
}

export default DateTime;