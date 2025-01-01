import React from 'react';
import User from './User';
import '../../public/index.css';

const Users = ({ users }) => {
  return (
    <section className="users">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
