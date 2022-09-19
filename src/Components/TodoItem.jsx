import React from 'react';

function TodoItem({ title, status,changeStatus,id }) {
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

  function toggle() {
    // status = React.useState(false)
    status = setStatus(!flag);
    changeStatus(id)
    
  }
  

  return (
    <div>
      <div>
        <h4 style={underline} className='todo'>
          {title}
        </h4>
      </div>
      <button style={color} onClick={toggle} className='outer'></button>
    </div>
  );
}
export default TodoItem;
