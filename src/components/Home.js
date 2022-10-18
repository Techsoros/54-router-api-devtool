import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const exist = cart.find((p) => p._id === product._id);
    if (exist) {
      alert(`${exist.name} t-shirt already added`);
    } else {
      setCart([...cart, product]);
    }
  };
  const removeFromCart = (product) => {
    const remaining = cart.filter((p) => p._id !== product._id);
    setCart(remaining);
  };
  return (
    <div className="grid grid-cols-[3fr_1fr]">
      <div className="mx-10">
        <h2 className="text-2xl font-bold text-left  pl-3  border-l-4 border-blue-600">
          Our Products
        </h2>
        <div className="product-container grid md:grid-cols-3 gap-8 my-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            ></ProductCard>
          ))}
        </div>
      </div>
      <div className=" mx-5 cart text-left">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
