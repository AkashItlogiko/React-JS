import { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ['todo1', 'todo2'];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = newTodo => {
    console.log(newTodo);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todoA={todos} />
    </div>
  );
};
export default Home;
