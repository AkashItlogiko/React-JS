/////======== akhane amader App.jsx ta hocche amader parent Component App->Users->User and ami parent component theke prop drilling ar maddhome data pass korchi amader child component gulote========///

import { useState } from 'react';
import Users from './Components/Users';
import NewUser from './Components/NewUser';
import { UsersContext } from './ContextAPI/UsersContext';

// import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Anisul kaka' },
    { id: 2, username: 'Dip kaku' },
  ]);

  const handleDeleteUser = id => {
    const filteredUsers = users.filter(use => use.id !== id);
    setUsers(filteredUsers);
  };
  const handleAddNewUser = newUser => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser handleAddNewUser={handleAddNewUser} />
        <Users handleDeleteUser={handleDeleteUser} />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
