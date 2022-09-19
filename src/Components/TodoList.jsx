import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos,fn }) {
  function changeStatus(id){
    
    const newTodos = todos.map(el=>{
      if(el.id===id){
        return {...el, status: !el.status}
      }
      return el;
    })
    fn(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))

   
  }
 
  return todos.map((el) => {
    return <TodoItem key={el.id} id={el.id} title={el.title} status={el.status} changeStatus={()=>changeStatus(el.id)} />;
  });
}
export default TodoList;
