import Todo from './Todo';
const Todos = props => {
  console.log(props.todoA);
  return (
    <div>
      {props.todoA.map((to, index) => (
        <Todo key={index} data={to} />
      ))}
    </div>
  );
};
export default Todos;
