import React, { useContext } from 'react';
import User from './User';
import '../../public/index.css';
import { UsersContext } from '../ContextAPI/UsersContext';

const Users = ({ handleDeleteUser }) => {
  const { users, setUsers } = useContext(UsersContext);
  return (
    <section className="users">
      {users.map(user => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </section>
  );
};

export default Users;
