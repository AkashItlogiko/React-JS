import Card from './components/Card';
import Data from './data.json';

function App() {
  return (
    <div>
      <h1 className="headingStyle">Todo App</h1>
      {Data.map((item, index) => (
        <Card key={index} titleText={item.title} cardDesc={item.desc} />
      ))}
    </div>
  );
}

export default App;
