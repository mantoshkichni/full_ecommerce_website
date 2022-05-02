import Home from "./Home";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Checkout from "./Checkout";
const Router = () => {
  return (
    <Routes>
      <Route path="/home" exact element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
};
export default Router;
