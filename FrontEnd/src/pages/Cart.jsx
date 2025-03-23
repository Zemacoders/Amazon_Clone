import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lipstick", price: 15.99, quantity: 1 },
    { id: 2, name: "Hair Shampoo", price: 10.98, quantity: 1 },
    { id: 3, name: "Samsung", price: 499.99, quantity: 1 },
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cart</h2>
      <div style={styles.table}>
        <div style={styles.tableRow}>
          <div style={styles.tableHeader}>Items</div>
          <div style={styles.tableHeader}>Price</div>
          <div style={styles.tableHeader}>Quantity</div>
          <div style={styles.tableHeader}>Total</div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.tableRow}>
            <div style={styles.tableCell}>{item.name}</div>
            <div style={styles.tableCell}>{item.price} Birr</div>
            <div style={styles.tableCell}>
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              {item.quantity}
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
            </div>
            <div style={styles.tableCell}>
              {(item.price * item.quantity).toFixed(2)} Birr
            </div>
            <button
              style={styles.removeButton}
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={styles.totalContainer}>
        <h3>Total: {calculateTotal()} Birr</h3>
        <button style={styles.checkoutButton}>Check out</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  tableHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButton: {
    padding: "5px 10px",
    margin: "0 5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalContainer: {
    marginTop: "20px",
    textAlign: "right",
  },
  checkoutButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cart;
