import React from "react";

const CartItem = ({ item, getItem }) => {
  const { name, picture } = item;
  return (
    <div className="flex justify-between items-center rounded-md cart-item py-3 px-2 my-6 w-full bg-slate-200  mx-3   ">
      <div className="item-body flex items-center">
        <div className="item-thumb">
          <img src={picture} alt="" width="30px" />
        </div>
        <h2 className="font-bold ml-5">{name.toUpperCase()}</h2>
      </div>
      <button onClick={() => getItem(item)} className="mr-5 ">
        ❎
      </button>
    </div>
  );
};

export default CartItem;
