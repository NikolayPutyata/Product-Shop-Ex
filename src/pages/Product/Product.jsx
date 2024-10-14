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
      <div>
        <img src={product.thumbnail} />
        <p>{product.title}</p>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
        <Link to="info">Info</Link>
        <Outlet />
      </div>
    </>
  );
};

export default Product;
