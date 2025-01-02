import React from 'react';
import '../../public/index.css';

const User = ({ user, handleDeleteUser }) => {
  const { id, username } = user;

  const handleDelete = id => {
    handleDeleteUser(id);
  };
  return (
    <article className="user">
      <h2>{id}</h2>
      <h2>{username}</h2>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
