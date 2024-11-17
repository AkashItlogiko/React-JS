import React from 'react';

import Child from './components/Satet_Lifting/Child';

export default function App() {
  const data = 'I am from parent (App)';

  const handleChildData = childData => {
    console.log('App : ' + childData);
  };

  return (
    <div>
      <Child data2={data} OnChildData={handleChildData} />
    </div>
  );
}
