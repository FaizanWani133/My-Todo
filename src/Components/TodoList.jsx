import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return todos.map((el) => {
    return <TodoItem key={el.id} title={el.title} status={el.status} />;
  });
}
export default TodoList;
