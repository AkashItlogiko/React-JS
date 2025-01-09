import React, { useCallback, useState } from 'react';
import Message from './components/Message';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log('App');

  const decrementMessage = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      {toggle ? 'on' : 'off'}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Incement
      </button>
      <Message numberOfMessage={count} onHandleDecrement={decrementMessage} />
    </div>
  );
};

export default App;
