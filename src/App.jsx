import React from 'react';

import Child from './components/Satet_Lifting/Child';

export default function App() {
  const data = 'I am from parent (App)';

  return (
    <div>
      <Child data2={data} />
    </div>
  );
}
