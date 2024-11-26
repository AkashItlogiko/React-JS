import React from 'react';

import style from './neeTodo.module.css';

const NewTodo = () => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="desc">Title: </label>
        <textarea type="text" id="desc" name="desc" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
