import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../fetaures/books/BooksSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
