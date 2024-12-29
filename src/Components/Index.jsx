/////////=============== Books list App without useReducer Hook ===============/////

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const booksData = [
  { id: 1, name: 'Pather Panchali' },
  { id: 2, name: 'Padma Nadir Majhi' },
  { id: 3, name: 'Srikanta' },
];

const Modal = () => {
  
}

const Index = () => {
  const [books, setbooks] = useState(booksData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [bookName, setbookName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setbooks(prevState => {
      const newBook = { id: uuidv4(), name: bookName };

      return [...prevState, newBook];
    });
  };

  return (
    <div>
      <h1>Books List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={e => {
            setbookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {books.map(book => {
        const { name, id } = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default Index;
