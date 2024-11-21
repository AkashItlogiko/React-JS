import React from 'react';

const Todo = props => {
  const { title, id, desc } = props.todo;

  return (
    <article>
      <div>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Todo;
