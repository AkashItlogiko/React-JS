import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
  books: [
    { id: uuidv4(), title: 'Love USA', author: 'Empty' },
    {
      id: uuidv4(),
      title: 'Love Bangladesh',
      author: 'Christopher Dilip Chandra Ramaputta Hossain ',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    showBooks: state => state.books,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter(book => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title; ////jehetu amader isBookExist ai variable ar moddhe array ar moddhe akta object eee filter hoye ashbe tar beshi object ashbe na karon amader action.payload ar moddhe theke jei id ta ashbe oi id onujayi jodi amader books state ar moddhe  kono object thake taholei shudhu oi object ta amader isBookExist ai variable ar moddhe  store hobe and jehetu arrary ar moddhe akta eee object thakbe tai ami isBookExist[0] diyechi mane amder isBookExist ar moddhe jei array ta ache and ai array ar moddhe jei object  ta ache oi object ta amader arrar ar moddhe 0 index aa ache tai akhane amra isBookExist[0] avabe likhechi and amader ai arrar ar moddhe jei object ta ache ai object ar moddhe jei title key ta ache oi key ar value take amra akhane update kore diyechi amader action.payload ar moddhe theke title jei data ta ashche oi data diye
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter(book => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
