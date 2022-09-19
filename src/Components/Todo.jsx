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
  function handleTodo(event) {
    event.preventDefault();
   
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
        <form >
        <input
          placeholder='Write Something'
          type='text'
          value={text}
          onChange={handleInput}
        />
        <button onClick={handleTodo}>+</button>
        </form>
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
      {text === "Faizan"  && <img width="300px" src='https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/122590645_3356399684457658_3441755671862065481_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iqMKCabLX0sAX-rAMs5&tn=kQJTYpj2vksXWzpP&_nc_ht=scontent.fluh1-1.fna&oh=00_AT_02D6yzIEfUJkrdo5CxTW2ZHJRIGEhbWhg4qdotG9AoQ&oe=634D070C' alt="faizan"/> }
    </div>
  );
}
export default Todo;
