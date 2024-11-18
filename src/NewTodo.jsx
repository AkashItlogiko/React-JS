import React from 'react';

const NewTodo = props => {
  props.onHandleNewTodo({
    title: 'I am new toTodo',
  });
  return <div>NewTodo</div>;
};
export default NewTodo;
