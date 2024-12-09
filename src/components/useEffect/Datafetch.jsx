import React, { useEffect, useState } from 'react';

const loadingMessage = <p>Todo Is Loading</p>;

const Datafetch = () => {
  const [todos, setTodos] = useState(null);

  const [isLodingh, setIsLoding] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        if (!res.ok) {
          throw Error('feching is not sucessfull');
        } else {
          return res.json();
        }
      })
      .then(data => {
        setTodos(data);
        setIsLoding(false);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setIsLoding(false);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map(todo => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLodingh && loadingMessage}
      {todosElement}
    </div>
  );
};

export default Datafetch;
