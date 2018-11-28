import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../TodoList.css';

class TodolList extends Component {
    render() {
        return (
            <div className='Todo-list-wrap'>
                <div className="Todo-list-content">
                    <TodoItem jobContent = 'How are you' />
                    <TodoItem jobContent = 'hello' />
                    <TodoItem jobContent = 'hello' />

                </div>
            </div>
        );
    }
}

export default TodolList;