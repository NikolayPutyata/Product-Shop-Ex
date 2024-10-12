import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductCount,
  deleteProduct,
  fetchCartProducts,
  increaseProductCount,
} from "../../redux/cartOps";
import { selectAmount, selectCartItems } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectAmount);

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Total: ${totalAmount}</p>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} />
            <p>Price: {product.price}</p>
            <p>Total: {product.price * product.count}</p>
            <div>
              <button onClick={() => dispatch(increaseProductCount(product))}>
                +
              </button>
              <p>{product.count}</p>
              <button onClick={() => dispatch(decreaseProductCount(product))}>
                -
              </button>
            </div>
            <button onClick={() => dispatch(deleteProduct(product))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
