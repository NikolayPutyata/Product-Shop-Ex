import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartOps";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
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
        <ul>
          {product.tags?.map((i) => (
            <li key={nanoid()}>{i}</li>
          ))}
        </ul>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
        <p>Rating: {product.rating}</p>
        <p>About: {product.description}</p>
        <h3>Reviews:</h3>
        <ul>
          {product.reviews?.map(({ comment, reviewerName }) => (
            <li key={nanoid()}>
              <h4>{reviewerName}</h4>

              <p>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Product;
