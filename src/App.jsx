import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SearchBox from "./pages/SearchBox/SearchBox";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { fetchCartProducts } from "./redux/Cart/cartOps";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />}>
          <Route path="info" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
