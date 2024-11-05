import Card from './components/Card';

function App() {
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      <Card titleText="call Mother" descText="This is desc1 " />
      <Card titleText="call Father" descText="This is desc2 " />
      <Card titleText="call Waif" descText="This is desc3 " />
    </div>
  );
}

export default App;
