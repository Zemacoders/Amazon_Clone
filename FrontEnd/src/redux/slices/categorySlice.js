import { createSlice } from "@reduxjs/toolkit";
  
const categorySlice = createSlice({
  name: "category",
  initialState:{
    categories: 'all',
  },
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
})

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;