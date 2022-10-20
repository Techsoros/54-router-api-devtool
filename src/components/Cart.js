import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart }) => {
  let c = 0;
  let msg;
  if (cart.length === 0) {
    msg = <h2 className="font-bold text-orange-300">Buy Some Items !!</h2>;
  }

  const getItem = (item) => {
    removeFromCart(item);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-left  pl-3  border-l-4 border-blue-600">
        Items in the Cart
      </h2>
      <p className="py-5">Total Item added : {cart.length}</p>
      {cart.length === 7 && <h2> 💕 Thanks for purchasing all our Products</h2>}
      {cart.length === 7 || <h2> Buy All and Get a Free Delivery </h2>}
      <div className="cart-tem-container">
        {cart.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            count={++c}
            getItem={getItem}
          ></CartItem>
        ))}
      </div>
      {msg}
      {cart.length >= 2 ? (
        <div className="">
          <h2>You Get 20% discount!</h2>
        </div>
      ) : (
        <h2>
          <small>Add minimum 2 Item to get 20% discount</small>
        </h2>
      )}
    </div>
  );
};

export default Cart;
