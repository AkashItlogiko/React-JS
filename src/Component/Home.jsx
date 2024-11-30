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
    console.log(todos);
  };

  const handleRemoveTodo = id => {
    setTodos(prevTodo => {
      const filterTodo = prevTodo.filter(todo => todo.id !== id);
      return filterTodo;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <NewTodo onAddTodo={handleTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
