import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { fetchCartProducts } from "../redux/operations/cartOps";
import { useDispatch } from "react-redux";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Products = lazy(() => import("../pages/Products/Products"));
const Product = lazy(() => import("../pages/Product/Product"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const SearchPage = lazy(() => import("../pages/Search/SearchPage"));
const OrderInfoPage = lazy(() => import("../pages/OrderInfo/OrderInfoPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-info" element={<OrderInfoPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
