import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <img src={product.thumbnail} />
      <p>{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </li>
  );
};

export default Product;
