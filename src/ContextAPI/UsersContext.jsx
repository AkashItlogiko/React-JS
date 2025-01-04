import React, { createContext, useState } from 'react';
export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Guru Anisul kaka' },
    { id: 2, username: 'Botol Lover Dip' },
    { id: 3, username: 'Palay Boy Dolon' },
    { id: 4, username: 'Dog Lover Simon' },
  ]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
