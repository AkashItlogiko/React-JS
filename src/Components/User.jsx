import '../../public/index.css';
import React from 'react';

const User = ({ user, handleDelete }) => {
  const { id, username } = user;
  console.log(username);

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
