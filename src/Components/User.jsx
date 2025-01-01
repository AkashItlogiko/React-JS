import React from 'react';
import '../../public/index.css';

const User = ({ user }) => {
  const { id, username } = user;
  return (
    <article className="user">
      <h2>{id}</h2>
      <h2>{username}</h2>
      <button
        onClick={() => {
          handleDelete;
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
