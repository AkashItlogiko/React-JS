import React, { useState } from 'react';

export default function Index1() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleIncrement}>
        <h1>+</h1>
      </button>
      <button onClick={handledecrement} disabled={count === 0 ? true : false}>
        <h1>-</h1>
      </button>
    </div>
  );
}
