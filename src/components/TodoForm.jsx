import React from 'react';

const TodoForm = (props) => {
  return (
    <form className="addTodo" onSubmit={props.addTodo}>
      <input
        type="text"
        className="todoForm__inputText"
        value={props.item}
        onChange={props.updateItem}
      />
      <input type="submit" className="todoForm__inputSubmit" value="追加" />
    </form>
  );
};

export default TodoForm;
