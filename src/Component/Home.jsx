import Todos from './Todos';

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
    <div>
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
