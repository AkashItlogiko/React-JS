import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [
    { id: 1, title: 'Love USA', author: 'Empty' },
    {
      id: 2,
      title: 'Love Bangladesh',
      author: 'Christopher Dip Chandra Ramaputta Hossain ',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: state => state.books,
  },
});

export const { showBooks } = booksSlice.actions;

export default booksSlice.reducer;
