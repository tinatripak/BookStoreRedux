import { createSlice } from "@reduxjs/toolkit";
const books = require("../books.json");

const bookStoreSlice = createSlice({
  name: "bookstore",
  initialState: books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, name, price, category, description } = action.payload;
      const isBook = state.find((book) => book.id === id);
      if (isBook) {
        isBook.id = id;
        isBook.name = name;
        isBook.price = price;
        isBook.category = category;
        isBook.description = description;
      }
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      const isBook = state.find((book) => book.id === id);
      if (isBook) {
        return state.filter((book) => book.id !== id);
      }
    },
  },
});

export const { addBook, updateBook, removeBook } = bookStoreSlice.actions;
export default bookStoreSlice.reducer;
