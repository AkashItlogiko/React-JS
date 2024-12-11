import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tostify() {
  const nweTodoAdd = () => {
    toast('Add new Todo');
  };

  const todoisDeleted = () => {
    toast('successfully Delete');
  };

  return (
    <div>
      <h2>Todo App</h2>
      <button onClick={nweTodoAdd}>Add-New</button>
      <button onClick={todoisDeleted}>Deleted</button>
      <ToastContainer />
    </div>
  );
}

export default Tostify;
