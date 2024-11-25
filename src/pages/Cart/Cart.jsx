import { useSelector } from "react-redux";
import {
  selectAmount,
  selectCartItems,
  selectIsLoading,
} from "../../redux/Cart/cartSlice";
import Loader from "../../components/Loader/Loader";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectIsLoading);
  const totalAmount = useSelector(selectAmount);

  return (
    <div className="container mx-auto px-2 py-2">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col items-center w-full max-w-5xl px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
            <ul className="flex flex-col w-full mt-6 space-y-4">
              {cartItems.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center my-6 max-w-5xl px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
            <p className="text-xl font-semibold text-gray-900">
              Total Amount: ${totalAmount}
            </p>
            <Link
              to={"/order-info"}
              className={`p-2 text-md btn btn-outline btn-wide`}
              disabled={cartItems.length === 0}
            >
              Continue
              <FaArrowRightLong />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
