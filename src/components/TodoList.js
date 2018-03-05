import React from 'react';
import CheckboxGroup from "antd/es/checkbox/Group";

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

  toggleItem(index) {
    this.props.dispatch({
      type: 'todos/toggle',
      payload: index
    })
  }

  render() {
    const todoList = this.props.todoList.map((val, index) => {

      return <div key={index}>
        <input type="checkbox" checked={val.finished} onChange={() => this.toggleItem(index)}/>
        < input value={val.value}/>
        <button onClick={() => this.deleteTodo(index)}>X</button>
      </div>
    });

    let count = 0;
    
    this.props.todoList.map(item => count = !item.finished ? count + 1 : count);

    return (
      <div>
        <h3>待办事项有:{count}</h3>
        <input placeholder="please input"
               value={this.state.value}
               onChange={(e) => this.setState({value: e.target.value})}
               onKeyDown={(e) => this.addTodo(e)}/>
        <div>
          {todoList}
        </div>
      </div>
    )
  }
}

export default TodoList;
