import React from 'react';

const TodoHeader = (props) => {
  const remaining = props.todos.filter(todo => {
    return !todo.isDone;
  });

  return (
    <div className="titleWrap">
      <h1 className="title">
        TodoList
        <span>({remaining.length}/{props.todos.length})</span>
      </h1>
      <button onClick={props.purge} className="deleteBtn">完了タスクを削除</button>
    </div>
  );
};

export default TodoHeader;
