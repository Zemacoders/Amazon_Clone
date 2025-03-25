import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});