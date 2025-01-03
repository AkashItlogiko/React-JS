import User from './User';
import '../../public/index.css'; 
import { useUsersContext } from '../CustomHook/useUseresContex';

const Users = ( ) => {
 const{users}=useUsersContext()
  return (
    <section className="users">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
