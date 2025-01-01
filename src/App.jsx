/////======== akhane amader App.jsx ta hocche amader parent Component App->Users->User and ami parent component theke prop drilling ar maddhome data pass korchi amader child component gulote========///

import { useState } from 'react';
import Users from './Components/Users';

// import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Anisul kaka' },
    { id: 2, username: 'Dip kaku' },
  ]);
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default App;
