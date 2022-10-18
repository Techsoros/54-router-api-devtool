import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "../src/layouts/Main";
import Home from "./components/Home";
import Order from "./components/Order";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: () => fetch("products.json"),
          element: <Home></Home>,
        },
        {
          path: "order",
          element: <Order></Order>,
        },
        {
          path: "*",
          element: (
            <h2 className="my-10 text-center text-3xl font-bold">
              404 : Page not found
            </h2>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
