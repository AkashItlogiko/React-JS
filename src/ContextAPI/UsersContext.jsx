import React, { createContext, useState } from 'react';
export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Jefa Anisul kakiya' },
    { id: 2, username: 'Amante Del Boottal Dipya' },
    { id: 3, username: 'Jugar Chico Doloniya' },
    { id: 4, username: 'Amante De los Perros Simóniya' },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
