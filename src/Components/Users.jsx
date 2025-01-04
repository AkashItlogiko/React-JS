import User from './User';
import '../../public/index.css';
import { useUsersContext } from '../CustomHook/useUseresContex';

const Users = () => {
  const { users, setUsers } = useUsersContext();
  const handleDelete = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <section className="users">
      {users.map(user => (
        <User key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default Users;
