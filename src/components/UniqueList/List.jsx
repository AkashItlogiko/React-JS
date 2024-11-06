import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    title: 'Todo1',
    desc: 'Todo1 description 1',
  },
  {
    id: uuidv4(),
    title: 'Todo2',
    desc: 'Todo2 description 2',
  },
  {
    id: uuidv4(),
    title: 'Todo3',
    desc: 'Todo3 description 3',
  },
];

const List = () => {
  return (
    <div>
      {todos.map(todo => {
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
export default List;
