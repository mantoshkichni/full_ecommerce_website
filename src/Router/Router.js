import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};
export default Router;
