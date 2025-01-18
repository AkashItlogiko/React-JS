import './App.css';
import React from 'react';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter App</h1>
      <CounterView />
      <PostsView />
    </div>
  );
};

export default App;
