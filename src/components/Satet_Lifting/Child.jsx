import React from 'react';

const Child = props => {
  const data = 'I am from Child Componet';

  props.OnChildData(data);

  return (
    <div>
      <p>I am Child components</p>
      <p>{props.data2}</p>
    </div>
  );
};
export default Child;
