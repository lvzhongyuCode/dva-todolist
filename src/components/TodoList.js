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

  deleteTodo(index) {
    this.props.dispatch({
      type: 'todos/deleteTodo',
      payload: index
    })
  }

  render() {
    const todoList = this.props.todoList.map((val, index) => {

      return <div key={index}>
        <input value={val.value}/>
        <button onClick={() => this.deleteTodo(index)}>X</button>
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
