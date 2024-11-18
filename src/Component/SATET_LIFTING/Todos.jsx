const Todos = props => {
  console.log(props.todo);
  return (
    <div>
      {props.todo.map((to, index) => (
        <p key={index}>{to}</p>
      ))}
    </div>
  );
};
export default Todos;
