import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkTodo={props.checkTodo}
        deleteTodo={props.deleteTodo}
      />
    );
  })
  return (
    <ul className="todoList">
      {props.todos.length ? todos : <li className="todoList__noTask"><span>タスクがありません</span><div className="cp_arrows"><div className="cp_arrow cp_bounce"></div></div></li>}
    </ul>
  );
};

export default TodoList;
