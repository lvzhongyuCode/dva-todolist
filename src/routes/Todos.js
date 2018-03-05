import React from 'react';
import {connect} from 'dva';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {

  return {
    todoList: state.todos.todoList
  }
};

export default connect(mapStateToProps)(TodoList);
