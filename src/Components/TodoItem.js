import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className='Todo-list-item'>
                <div className="Item-content">
                    {this.props.jobContent}
                </div>
            </div>
        );
    }
}

export default TodoItem;