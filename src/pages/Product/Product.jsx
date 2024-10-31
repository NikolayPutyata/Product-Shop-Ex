import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartOps";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../api";

const Product = () => {
  const [product, setProduct] = useState({});

  const location = useLocation();
  const backState = useRef(location.state);

  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    const fetchAndSetProductById = async () => {
      try {
        const data = await fetchProductById(productId);
        console.log(data);

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
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.images ? product.images[0] : product.trumbnail}
            className="max-w-xl rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6 text-xl font-bold">${product.price}</p>
            <button
              className="btn btn-lg btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Link to="info">Info</Link>
      <Outlet />
    </>
  );
};

export default Product;
