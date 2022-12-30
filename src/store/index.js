import { configureStore } from "@reduxjs/toolkit";

// reducers
import users from "./slices/users";

export const store = configureStore({
  reducer: {
    // reducers
    users,
  },
});

export default store;
