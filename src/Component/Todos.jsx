import React from 'react';
import Todo from './Todo';
import style from './todos.module.css';

const Todos = props => {
  return (
    <section className={style.todos}>
      {props.todos.map(todo => (
        <Todo
          todo={todo.todox}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};
export default Todos;
