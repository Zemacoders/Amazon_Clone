import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart.action";
import { useState, useEffect } from "react";

const QuantitySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  useEffect(() => {
    setQuantity(Math.min(item.countInStock, quantity));
  }, [item.countInStock, quantity]);

  const decreaseQty = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(addToCart(item._id, newQuantity));
    }
  };

  const increaseQty = () => {
    if (quantity < item.countInStock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(addToCart(item._id, newQuantity));
    }
  };

  const handleQuantityChange = (e) => {
    let value = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= item.countInStock) {
      setQuantity(value);
      dispatch(addToCart(item._id, value));
    }
  };

  return (
    <div className="flex gap-2 justify-start w-full items-start">
      <button
        onClick={decreaseQty}
        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <AiOutlineMinus />
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-12 text-center border rounded-lg"
        onChange={handleQuantityChange}
      />
      <button
        onClick={increaseQty}
        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <GoPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;
