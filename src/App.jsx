import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import MoreInfoProduct from "./components/MoreInfoProduct/MoreInfoProduct";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<Product />}>
          <Route path="info" element={<MoreInfoProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
