import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import AddToBag from "./pages/AddToBag";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [addPro, setAddPro] = useState();
  function datas(e) {
    console.log(e);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home datas={datas} setAddPro={setAddPro} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/addToBag",
      element: <AddToBag addPro={addPro} />,
    },
    {
      path:"/login",
      element:<Login/>
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  );
}

export default App;
