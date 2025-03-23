import { nextStep, prevStep, updateCart, updateAddress, updatePayment } from "./checkoutSlice";


const saveState = (state) => {
    localStorage.setItem("checkoutState", JSON.stringify(state));
};



export const handlePrevStep = () => (dispatch, getState) => {
  dispatch(prevStep());
  saveState(getState().checkout);
};

export const handleNextStep = () => (dispatch, getState) => {
  dispatch(nextStep());
  const checkoutState = getState().checkout;
  if (checkoutState) {
    saveState(checkoutState);
  }
};

export const handleUpdateCart = (cart) => (dispatch, getState) => {
  dispatch(updateCart(cart));
  saveState(getState().checkout);
};

export const handleUpdateAddress = (address) => (dispatch, getState) => {
  dispatch(updateAddress(address));
  saveState(getState().checkout);
};

export const handleUpdatePayment = (payment) => (dispatch, getState) => {
  dispatch(updatePayment(payment));
  saveState(getState().checkout);
};

export const resetCheckout = () => (dispatch) => {
  localStorage.removeItem("checkoutState");
  dispatch({ type: "checkout/reset" }); 
};
