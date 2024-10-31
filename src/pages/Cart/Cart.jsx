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
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>Total: ${totalAmount}</p>
          <ul className="flex-col justify-center items-center">
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
