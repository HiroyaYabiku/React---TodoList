import React from 'react';
import classNames from 'classnames';


const TodoItem = (props) => {
  const checkIcon = classNames('checkIcon', {
    'is-done': props.todo.isDone,
  });

  return (
    <li>
      <label className="todoList__inner">
        <input
          className="checkbox"
          type="checkbox"
          checked={props.todo.isDone}
          onChange={() => props.checkTodo(props.todo)}
        />
        <span className={checkIcon}></span>
        <span className="todoText">
        {props.todo.title}
        </span>
      </label>
      <span
        className="deleteThis"
        onClick={() => props.deleteTodo(props.todo)}
      >【×】</span>
    </li>
  );
};

export default TodoItem;
