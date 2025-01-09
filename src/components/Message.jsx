import React, { memo } from 'react';

const Message = ({ numberOfMessage, onHandleDecrement }) => {
  console.log('message');
  return (
    <div>
      <p>send {numberOfMessage} message</p>
      <button onClick={() => onHandleDecrement()}>
        Decrement Message Number
      </button>
    </div>
  );
};

export default memo(Message);
