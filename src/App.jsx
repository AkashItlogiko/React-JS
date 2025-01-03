/////======== akhane amader App.jsx ta hocche amader parent Component App->Users->User and ami parent component theke prop drilling ar maddhome data pass korchi amader child component gulote========///

import Users from './Components/Users';
import NewUser from './Components/NewUser';
 import UsersProvider from './ContextAPI/UsersContext';
// import './App.css';

const App = () => {
  
 
  return (
   <UsersProvider>
      <div>
        <NewUser/>
        <Users />
      </div>
    </UsersProvider>
  );
};

export default App;
