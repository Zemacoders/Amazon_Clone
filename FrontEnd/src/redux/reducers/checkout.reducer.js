import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
    const savedState = localStorage.getItem("checkoutState");
    return savedState ? JSON.parse(savedState) : null;
};

const initialState = loadState() || {
  step: 1,
  cart: [],
  address: {},
  payment: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 4) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    updatePayment: (state, action) => {
      state.payment = action.payload;
    },
    reset: () => initialState, 
  },
});

export const { nextStep, prevStep, updateCart, updateAddress, updatePayment } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
