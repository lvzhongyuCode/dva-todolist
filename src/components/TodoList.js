import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  addTodo(e) {
    if (e.keyCode === 13) {
      const todo = e.target.value;

      this.props.dispatch({
        type: 'todos/addTodo',
        payload: todo
      });
      this.setState({value: ''})
    }
  }

  render() {
    const todoList = this.props.todoList.map((val, index) => {

      return <div key={index}>
        {val.value}
      </div>
    });
    return (
      <div>
        <input placeholder="please input"
               value={this.state.value}
               onChange={(e) => this.setState({value: e.target.value})}
               onKeyDown={(e) => this.addTodo(e)}/>
        <div>
          {todoList}
        </div>
      </div>)
  }
}

export default TodoList;
