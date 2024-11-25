import Todos from './Todos';
import style from '../Component/home.module.css';
import NewTodo from './NewTodo';

const dummyTodos = [
  {
    id: 1,
    title: 'Todo title 1',
    desc: 'todo1 description is here',
  },
  {
    id: 2,
    title: 'Todo title 2',
    desc: 'todo2 description is here',
  },
];

const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <NewTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
