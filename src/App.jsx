import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import MoreInfoProduct from "./components/MoreInfoProduct/MoreInfoProduct";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />}>
          <Route path="info" element={<MoreInfoProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
