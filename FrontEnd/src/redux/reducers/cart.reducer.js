import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../type';

const dummyProducts = [
  {
    _id: "1",
    name: "Smartphone",
    brand: "Samsung",
    price: 499.99,
    description: "A sleek and powerful smartphone with a high-resolution camera.",
    countInStock: 150,
    featured: true,
    images: [
      "https://res.cloudinary.com/dxhdsc0lc/image/upload/v1741640399/photo_2025-03-10_23-59-20_szrgqt.jpg",
      "https://res.cloudinary.com/dxhdsc0lc/image/upload/v1741640396/photo_2025-03-10_23-59-21_lfozgj.jpg",
      "https://res.cloudinary.com/dxhdsc0lc/image/upload/v1741640393/photo_2025-03-10_23-59-22_ask8xw.jpg",
      "https://res.cloudinary.com/dxhdsc0lc/image/upload/v1741640381/photo_2025-03-10_23-59-24_ldpaib.jpg",
    ],
    category: "Electronics",
    rating: 4.5,
    seller: {
      _id: "seller123",
      name: "Dummy Seller A",
    },
  }
];

export default dummyProducts;


const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const initialState = {
  cartItems: cartItemsFromStorage.length > 0 ? cartItemsFromStorage : dummyProducts.map((item) => ({
    name: item.name,
    image: item.images[0],
    price: item.price,
    countInStock: item.countInStock,
    _id: item._id,
    seller: item.seller,
    qty: 1,
  })),
  shippingAddress: {},
  paymentMethod: "",
};


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      const updatedCartItems = existItem
        ? state.cartItems.map((x) => (x._id === existItem._id ? item : x))
        : [...state.cartItems, item];

    
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        ...state,
        error: "",
        cartItems: updatedCartItems,
      };
    }

    case CART_REMOVE_ITEM: {
      const updatedCartItems = state.cartItems.filter((x) => x._id !== action.payload);

     
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        ...state,
        error: "",
        cartItems: updatedCartItems,
      };
    }

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };

    case CART_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };

    case CART_EMPTY: {
      localStorage.removeItem("cartItems");
      return { ...state, error: "", cartItems: [] };
    }

    default:
      return state;
  }
};
