import { useSelector } from "react-redux";
import {
  selectAmount,
  selectCartItems,
  selectIsLoading,
} from "../../redux/Cart/cartSlice";
import Loader from "../../components/Loader/Loader";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectIsLoading);
  const totalAmount = useSelector(selectAmount);

  return (
    <div className="container mx-auto px-2 py-2">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center w-full max-w-5xl px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
          <ul className="flex flex-col w-full mt-6 space-y-4">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <p className="text-xl font-semibold text-gray-800 mt-6">
            Total: ${totalAmount}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
