import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cart.action';
import MessageBox from '../components/MessageBox';
import StepIndicator from '../components/checkout/StepIndicator';
import { CiCircleRemove } from "react-icons/ci";
import QuantitySelector from '../components/QuantitySelector';

export default function CartPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // if user is not logged in
    navigate('/signin?redirect=/shipping');
  };
  return (
    <div className="w-full min-h-[60vh] flex items-center ">
      <div className="w-full mx-auto rounded-lg p-6 flex flex-col gap-4 items-center justify-center h-full">
        <div className="mb-6 flex items-center justify-between">
          <div>{error && <MessageBox type="error">{error}</MessageBox>}</div>
        </div>
        {cartItems.length === 0 ? (
          <MessageBox>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
                <img
                  src="/kattle.svg"
                  alt="Cart Illustration"
                  className="rounded-lg object-cover w-[100px] h-[50px] lg:w-[400px] lg:h-[200px]"
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h2 className="text-2xl font-semibold">
                  Your Amazon Cart Is empty
                </h2>
                <div className="flex gap-4 mt-4">
                  <button className="rounded-full px-4 py-2 bg-yellow-500 text-black cursor-pointer" onClick={checkoutHandler}>
                    Sign in to your account
                  </button>
                  <button onClick={() => navigate('/signup?redirect=/shipping')} className="rounded-full px-4 py-1 border-gray-300 border text-gray-800 cursor-pointer">
                    Sign Up now
                  </button>
                </div>
              </div>
            </div>
          </MessageBox>
        ) : (
          <div className="w-full flex flex-col gap-4">
            <div className='flex justify-end w-full'>
            <StepIndicator step={1} />
            </div>
            <div className="p-4 rounded-lg w-full">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Item</th>
                    <th className="text-left p-2">Price</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Total</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td className="flex items-center gap-2 p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg mr-4 p-2 bg-gray-100"
                        />
                        <Link
                          to={`/product/${item.product}`}
                          className="text-lg font-semibold text-gray-800"
                        >
                          {item.name}
                        </Link>
                      </td>
                      <td className="p-2 text-lg font-semibold text-gray-800">
                        ${item.price}
                      </td>
                      <td className="p-2 text-lg font-semibold text-gray-800">
                        <QuantitySelector item={item}/>
                      </td>
                      <td className="p-2 text-lg font-semibold text-gray-800">
                        {(item.price * item.qty).toFixed(2)} ETB
                      </td>
                      <td className="p-2">
                        <button
                          type="button"
                          onClick={() => removeFromCartHandler(item._id)}
                          className="text-gray-500 hover:text-red-700"
                        >
                          <CiCircleRemove size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 flex items-center justify-center gap-12">
                <div className="flex flex-col space-y-4 items-center justify-center">
                  <h2 className="text-gray-800 text-xl">Total</h2>
                  <h2 className="text-xl font-bold mb-4">
                    {cartItems
                      .reduce((a, c) => a + c.price * c.qty, 0)
                      .toFixed(2)}{' '}
                    ETB
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className={`py-2 px-12 text-white font-semibold rounded-full ${
                    cartItems.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-yellow-500 cursor-pointer hover:bg-yellow-600 duration-300 transition-colors'
                  }`}
                  disabled={cartItems.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
