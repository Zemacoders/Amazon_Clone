import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        cartItems: [],
    },
    reducers:{
        // Action to add item to cart
    },
})

// export Actions

// export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
