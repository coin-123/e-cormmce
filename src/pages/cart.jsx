import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // ✅ make sure path is correct

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Increase item quantity
  const increaseQty = (id) => {
    let updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease item quantity
  const decreaseQty = (id) => {
    let updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Remove item completely
  const removeItem = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="flex flex-col items-center justify-center w-[90%] mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="w-full mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                {/* Product Info */}
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} 
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    ➕
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 font-bold"
                >
                  {/* ❌ */}
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-[40%] border rounded-lg p-4 shadow">
            <h2 className="font-bold text-lg mb-4">Cart Total</h2>
            <div className="flex justify-between border-b py-2">
              <span>Sub-total</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between border-b py-2 font-bold">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
