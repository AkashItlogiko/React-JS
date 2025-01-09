import React, { useState } from 'react';
import Message from './components/Message';

const App = () => {
  const [count, setCount] = useState(0);
  console.log('App');
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1.5);
        }}
      >
        Incement
      </button>
      <Message numberOfMessage={count} />
    </div>
  );
};

export default App;
