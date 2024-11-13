import React from 'react';
import './index.css';

export default function App() {
  const handleParentClick = event => {
    console.log('Parent event :', event);
  };
  const handleChildClick = event => {
    event.stopPropagation();
    console.log('Child event :', event);
  };

  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Welcome everyone</h1>
      <button onClick={handleChildClick}>+</button>
    </div>
  );
}
