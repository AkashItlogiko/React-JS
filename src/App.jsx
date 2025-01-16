import './App.css';
import React from 'react';
import CounterView from './features/counter/CounterView';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter App</h1>
      <CounterView />
    </div>
  );
};

export default App;
