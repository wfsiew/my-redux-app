import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.todo.trim()) return;
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            id="todo" 
            value={this.state.todo} 
            onChange={this.handleChange} 
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);