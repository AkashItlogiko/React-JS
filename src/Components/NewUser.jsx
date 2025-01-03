import React, {  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
 
import { useUsersContext } from '../CustomHook/useUseresContex';

const NewUser = ( ) => {
 const {setUsers}=useUsersContext();
  const [username, setUsername] = useState('');
  const handleUserNameChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = { id: uuidv4(), username: username };
      setUsers(prevUsers => [...prevUsers, newUser]);
    setUsername('');
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New member name"
          name="username"
          value={username}
          onChange={handleUserNameChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
