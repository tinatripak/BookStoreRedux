import { configureStore } from "@reduxjs/toolkit";

import bookStoreReducers from "./reducers/bookStoreReducers";

const store = configureStore({
  reducer: {
    books: bookStoreReducers,
  },
});

export default store;
