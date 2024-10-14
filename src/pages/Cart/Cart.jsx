import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts } from "../../redux/cartOps";
import {
  selectAmount,
  selectCartItems,
  selectIsLoading,
} from "../../redux/cartSlice";
import Loader from "../../components/Loader/Loader";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectIsLoading);
  const totalAmount = useSelector(selectAmount);

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Cart</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>Total: ${totalAmount}</p>
          <ul>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
