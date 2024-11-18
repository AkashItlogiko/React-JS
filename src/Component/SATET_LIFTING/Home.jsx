import Todos from './Todos';

const Home = () => {
  const todos = ['todo1', 'todo2'];

  return (
    <div>
      <Todos todoA={todos} />
    </div>
  );
};
export default Home;
