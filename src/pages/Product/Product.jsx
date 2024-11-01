import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartOps";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../api";
import { nanoid } from "nanoid";

const Product = () => {
  const [product, setProduct] = useState({});

  const location = useLocation();
  const backState = useRef(location.state || "/products");

  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    const fetchAndSetProductById = async () => {
      try {
        const data = await fetchProductById(productId);

        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProductById();
  }, [productId]);

  return (
    <>
      <Link to={backState.current}>Back</Link>
      <div className="hero bg-base-200 px-4 lg:px-8">
        <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12">
          <img
            src={product.images ? product.images[0] : product.thumbnail}
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
              >
                Add to cart
              </button>
              <Link
                to="info"
                className="btn btn-outline btn-md lg:btn-lg w-full sm:w-auto"
              >
                Info
              </Link>
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

      <Outlet />
    </>
  );
};

export default Product;
