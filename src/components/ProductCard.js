import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const { picture, name, price } = product;
  return (
    <div className="product-card rounded-md shadow-xl space-y-5 border-2 border-gray-200  p-6  flex flex-col justify-between">
      <div className="card-img ">
        <img src={picture} alt="" className="w-[200px] mx-auto" />
      </div>
      <div className="card-body">
        <p className="font-bold">{name}</p>
        <p className="">price : ${price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="card-btn cursor-pointer py-2 px-4 rounded-lg hover:text-white bg-blue-600 hover:bg-blue-800 "
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
