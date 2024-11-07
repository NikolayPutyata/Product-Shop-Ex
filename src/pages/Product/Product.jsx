import { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/Cart/cartOps";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/Products/productsOps";
import { nanoid } from "nanoid";
import { selectSingleProduct } from "../../redux/Products/singleProductSlice";
import Carousel from "./Carousel";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { selectDisabledProduct } from "../../redux/Products/productsSlice";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectSingleProduct);
  const isProductInCart = useSelector(selectDisabledProduct);

  const location = useLocation();
  const backState = useRef(location.state || "/products");

  const { productId } = useParams();

  useEffect(() => {
    const fetchAndSetProductById = async () => {
      try {
        await dispatch(fetchProductById(productId));
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProductById();
  }, [productId, dispatch]);

  return (
    <>
      <Link to={backState.current}>Back</Link>
      <div className="hero bg-base-200 px-4 lg:px-8">
        <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12">
          <img
            src={
              product.images && product.images.length <= 3
                ? product.images[0]
                : product.thumbnail
            }
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {product.title}
            </h1>
            <p className="py-4 text-lg sm:text-xl font-bold">
              ${product.price}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="btn btn-primary btn-md lg:btn-lg w-full sm:w-auto "
                onClick={() => dispatch(addToCart(product))}
                disabled={isProductInCart}
              >
                {isProductInCart ? "Added" : "Add to cart"}
              </button>
            </div>
            <div className="mt-6">
              <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {product.tags?.map((tag) => (
                  <li
                    key={nanoid()}
                    className="bg-white text-black px-3 py-1 rounded-full text-sm border border-blue-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails product={product} />

      {product.images && product.images.length <= 3 && (
        <Carousel product={product} />
      )}
    </>
  );
};

export default Product;
