import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }

    render(){
        return(
            <form onSubmit={this.submitTask}>
                <input type='text'
                        value={this.task}
                        name='task'
                        onChange={this.handleChanges} />
                        <button className='add'>Add</button>
            </form>
        )
    }
}

export default TodoForm;