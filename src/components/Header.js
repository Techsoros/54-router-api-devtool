import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200  py-3">
      <div className="container mx-auto flex align-center ">
        <div className="logo ">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/10/20/29/circle-1192509_960_720.png"
            width="50px"
            alt=""
          />
        </div>
        <div className="mr-auto"></div>
        <div className="link flex gap-4 h-6">
          <Link to="home" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="order" className="hover:text-blue-600">
            Order
          </Link>
          <Link to="about" className="hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
