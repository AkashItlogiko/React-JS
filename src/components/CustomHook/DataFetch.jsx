import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const Datafetch = () => {
  const { data, isLodingh, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const loadingMessage = <p>Todo Is Loading</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
    data &&
    data.map(todo => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{errorMessage}</p>}
      {isLodingh && loadingMessage}
      {todosElement}
    </div>
  );
};

export default Datafetch;
