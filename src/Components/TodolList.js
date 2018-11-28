import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../TodoList.css';

class TodolList extends Component {
    constructor(props) {
        super(props);
         this.state = {
            jobsList: this.dataJobs
        }
    }


    render() {
        return (
            <div className='Todo-list-wrap'>
                <div className="Todo-list-content">
                    <ul>
                        {this.props.jobsList.map(item => {
                            if(item.currentDate === 'Today'){
                                return <TodoItem key={item.id} jobContent={item.jobName}/>
                            }
                            return false;
                        })}
                    </ul>

                </div>
            </div>
        );
    }
}

export default TodolList;