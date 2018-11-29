import React, { Component } from 'react';

class TodoItem extends Component {

    handleClickItem(id) {
        return (event) =>{
            console.log('event.target :', id);
            // console.log(this.props.activeJob);
            
                this.props.activeJob(id);

        }
    }
    render() {
        return (
            <div className='Todo-list-item ' onClick={this.handleClickItem(this.props.idJob)}>
                <div className={this.props.active? 'Item-content' : 'Item-content Disable-job'}>
                    {this.props.jobContent}
                </div>
            </div>
        );
    }
}

export default TodoItem;