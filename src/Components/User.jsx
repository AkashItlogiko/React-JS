import '../../public/index.css';
import React from 'react';
import { useUsersContext } from '../CustomHook/useUseresContex';

const User = ({ user  }) => {
const {setUsers}=useUsersContext();
  const { id, username } = user;
  const handleDelete = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
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
