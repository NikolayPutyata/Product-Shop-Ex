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
        <div className="flex flex-col w-full px-4 sm:px-10 md:px-20 lg:px-32 xl:px-64 mx-auto">
          <ul className="flex-col justify-center items-center mt-5">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <p>Total: ${totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
