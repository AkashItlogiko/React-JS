import React from 'react';

export default Child = props => {
  return (
    <div>
      <p>I am Child components</p>
      <p>{props.data2}</p>
    </div>
  );
};
