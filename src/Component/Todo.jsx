import React from 'react';
import style from './todo.module.css';

const Todo = props => {
  const { title, id, desc } = props.todo;

  const handleClick = id => {
    alert(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
