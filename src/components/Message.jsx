import React, { memo } from 'react';

const Message = ({ numberOfMessage }) => {
  console.log('message');
  return <p>send {numberOfMessage} message</p>;
};

export default memo(Message);
