import { configureStore } from '@reduxjs/toolkit';

// Import all Slice Reducers here
import CartReducer from './CartSlice';



const store = configureStore({ 
    reducer: {
        cart: CartReducer,
    },
});

export default store;