import "./App.css";
import Shop from "./Componets/shop";
import { Routes, Route } from "react-router-dom";
import NavLink from "./navbar/Navlinks";
import Cart from "./cart/cart";
function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;
