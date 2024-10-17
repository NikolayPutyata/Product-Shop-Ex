import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "../../redux/cartOps";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li key={product.id}>
      <img src={product.thumbnail} />
      <p>Price: ${product.price}</p>
      <p>Total: ${(product.price * product.count).toFixed(2)}</p>
      <div>
        <button onClick={() => dispatch(increaseProductCount(product))}>
          +
        </button>
        <p>{product.count}</p>
        <button onClick={() => dispatch(decreaseProductCount(product))}>
          -
        </button>
      </div>
      <button onClick={() => dispatch(deleteProduct(product))}>Delete</button>
    </li>
  );
};

export default CartItem;
