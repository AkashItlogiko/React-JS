import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [{ id: 1, title: 'Love USA', author: 'Akash Saha' }],
  books: [{ id: 2, title: 'Love Bangladesh', author: 'Akash Saha' }],
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: state => state,
  },
});
