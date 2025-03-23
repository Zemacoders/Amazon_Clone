import React, { useState } from "react";

const Cart = () => {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 20 },
    { id: 2, name: "Product 2", quantity: 1, price: 30 },
  ]);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id}>
                <p>
                  {item.name} - {item.quantity} x ${item.price}
                </p>
                <button
                  onClick={() =>
                    setCartItems(cartItems.filter((i) => i.id !== item.id))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={handleNext}>Proceed to Payment</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Payment</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry Date"
              onChange={handlePaymentChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handlePaymentChange}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Proceed to Address</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Address</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleAddressChange}
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Proceed to Done</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Thank you for your purchase!</h2>
            <p>Order Summary:</p>
            {cartItems.map((item) => (
              <p key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </p>
            ))}
            <p>
              Shipping to: {shippingAddress.name}, {shippingAddress.address},{" "}
              {shippingAddress.city}, {shippingAddress.state},{" "}
              {shippingAddress.zip}, {shippingAddress.country}
            </p>
            <button onClick={() => setStep(1)}>Continue Shopping</button>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Cart;
