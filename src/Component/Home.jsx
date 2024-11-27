import Todos from './Todos';
import style from '../Component/home.module.css';
import NewTodo from './NewTodo';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = todox => {
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), todox }];
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <NewTodo onAddTodo={handleTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
