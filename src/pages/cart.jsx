// import { motion } from 'framer-motion';
import React from 'react'
import  { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQty = (id) => {
    let updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

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

  const removeItem = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  
    
   return (
    <div>
      <h1>🛒 My Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
              <div>
                <button onClick={() => increaseQty(item.id)}>➕</button>
                <button onClick={() => decreaseQty(item.id)}>➖</button>
                <button onClick={() => removeItem(item.id)}>❌ Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>





    // <section className="flex flex-col items-center justify-center w-[90%] h-auto">
    //     <h1>🛒 My Items</h1>


    //     <div className="flex items-center justify-center w-full h-auto bg-amber-400 mb-[2rem]">

    //         <div className="flex items-center justify-center w-[20%] h-[100%] bg-red-400">

    //         </div>
    //         <div className="flex items-center justify-center w-[20%] h-[100%] bg-red-400">rr</div>
    //         <div className="flex items-center justify-center w-[20%] h-[100%] bg-red-400">rr</div>
    //         <div className="flex items-center justify-center w-[20%] h-[100%] bg-red-400">rr</div>

    //     </div>

    //     <div className="flex items-center justify-center w-full">
    //         <button className="">Return to Shop</button>
    //         <button className="">Update Cart</button>
    //     </div>

    //     <div className="flex items-center justify-center w-full">
    //         <div className="flex flex-col items-center  justify-center w-[40%] border">
    //             <p className="font-bold">
    //                 Cart Total
    //             </p>
    //             <div className="flex flex-col justify-center items-center w-[90%]">
    //                 <span className="w-full border-b-[1px] pb-[10px]">
    //                     <p className="">
    //                         Sub-total
    //                     </p>
    //                     <p className=""></p>
    //                 </span>
    //                 <span className="w-full border-b-[1px] pb-[10px]">
    //                     <p className="">
    //                         Shipping
    //                     </p>
    //                     <p className="">free</p>
    //                 </span>
    //                 <span className="w-full border-b-[1px] pb-[10px]">
    //                     <p className="">
    //                         Total
    //                     </p>
    //                     <p className=""></p>
    //                 </span>
    //             </div>
    //             <div className="w-full">
    //                 <button className="bg-blue-200">Process to checkout</button>
    //             </div>
    //         </div>
    //     </div>

    // </section>







    //   <div>
    //    <h1>🛒 My Shop</h1>

    //    {/* Example products */}
    //    <button onClick={() => addToCart({ id: 1, name: "Laptop", price: 2000 })}>
    //      Add Laptop
    //    </button>
    //    <button onClick={() => addToCart({ id: 2, name: "Phone", price: 1000 })}>
    //      Add Phone
    //    </button>

    //    {/* Cart */}
    //    <h2>Cart</h2>
    //    {cart.length === 0 ? (
    //      <p>Cart is empty</p>
    //    ) : (
    //      <ul>
    //        {cart.map((item) => (
    //          <li key={item.id}>
    //            {item.name} - {item.quantity} x ${item.price}
    //            <div>
    //              <button onClick={() => increaseQty(item.id)}>➕</button>
    //              <button onClick={() => decreaseQty(item.id)}>➖</button>
    //              <button onClick={() => removeItem(item.id)}>❌ Remove</button>
    //            </div>
    //          </li>
    //        ))}
    //      </ul>
    //    )}
    //  </div>

  );
};

  

  


export default Cart