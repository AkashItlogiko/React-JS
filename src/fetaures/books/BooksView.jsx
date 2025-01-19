import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
  const books = useSelector(state => state.book.books);
  console.log(books);
  return (
    <div>
      <h2>List of Books</h2>
    </div>
  );
};

export default BooksView;
BooksView;
