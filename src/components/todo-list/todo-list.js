import React from 'react';

const TodoList = props => {
  const todoList = props.list.map(todo => {
    const textDecoration = todo.done ? 'line-through' : 'none';
    return (
      <li
        key={todo.id}
        onClick={() => props.onTodoClicked(todo)}
        style={{ textDecoration }}
      >
        {todo.name}
      </li>
    );
  });
  return <ol>{todoList}</ol>;
};

export default TodoList;
