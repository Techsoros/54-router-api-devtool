import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const main = () => {
  return (
    <div>
      <nav>
        <Header></Header>
      </nav>
      <main className="py-6">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default main;
