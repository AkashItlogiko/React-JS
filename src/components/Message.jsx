import { array, number } from 'prop-types';
import React, { memo, useMemo } from 'react';

const Message = ({ numberOfMessage, onHandleDecrement }) => {
  console.log('message');

  const calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 50000; index++) {
      number++;
    }
    return number;
  }, []);

  return (
    <div>
      <h2>Number:{calculatedNumber}</h2>
      <p>send {numberOfMessage} message</p>
      <button onClick={() => onHandleDecrement()}>
        Decrement Message Number
      </button>
    </div>
  );
};

export default memo(Message);
