import React from 'react';
import TodoList from './TodoList';
function Todo() {
  // const initial = JSON.parse(localStorage.getItem('todos')) || [];
  const [text, setText] = React.useState('');
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  function handleInput(event) {
    setText(event.target.value);
  }
 
  function Heart(){
    
    return (<div id="transparent"><div  id="heart"></div><div  id="heart"></div><div  id="heart"></div></div>)
  }
  function handleTodo() {
   
    const obj = {
      id: Date.now(),
      title: text,
      status: false,
    };
    setTodos([...todos, obj]);
    setText('');
  }
  function onClick() {
    setTodos([]);
    localStorage.clear('todos');
  }
  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className='main'>
      <div className='inputDiv'>
        <input
          placeholder='Write Something'
          type='text'
          value={text}
          onChange={handleInput}
        />
        <button onClick={handleTodo}>+</button>
      </div>
      <TodoList todos={todos.sort(function(a,b){
return a.status -b.status
      })} fn={setTodos} />
      {todos.length > 0 ? (
        <button className='resetBtn' onClick={onClick}>
          Reset
        </button>
      ) : (
        <br></br>
      )}
      {text === "Biku"  && <Heart /> }
      {text === "biku"  && <Heart /> }
    </div>
  );
}
export default Todo;
