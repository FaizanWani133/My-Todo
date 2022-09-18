import React from 'react';

function TodoItem({ title, status }) {
  const [flag, setStatus] = React.useState(status);
  const color = {
    background: '#FF5733',
  };
  const underline = {
    textDecoration: 'none',
    opacity: '1',
  };
  if (flag) {
    color.background = '#50C878';
    underline.textDecoration = 'line-through';
    underline.opacity = '.5';
  } else {
    color.background = '#FF5733';
    underline.textDecoration = 'none';
    underline.opacity = '1';
  }

  function changeStatus() {
    setStatus(!flag);
  }

  return (
    <div>
      <div>
        <h4 style={underline} className='todo'>
          {title}
        </h4>
      </div>
      <button style={color} onClick={changeStatus} className='outer'></button>
    </div>
  );
}
export default TodoItem;
