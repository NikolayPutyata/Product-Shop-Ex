import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "../../redux/operations/cartOps";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li
        key={product._id}
        className="flex flex-col sm:flex-row justify-between items-center border p-4 lg:px-4 lg:py-1"
      >
        <img
          src={product.thumbnail}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col sm:flex-row sm:items-center lg:justify-between w-full sm:ml-4">
          <div className="flex w-full sm:w-1/3 mb-2 sm:mb-0 justify-center">
            <p className="break-words p-4 text-lg">{product.title}</p>
          </div>

          <p className="flex justify-center break-words p-4 text-lg">
            ${(product.price * product.count).toFixed(2)}
          </p>

          <div className="flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0">
            <button
              className={`btn btn-outline btn-square btn-sm border-gray-400 text-gray-700 ${
                product.count === 1
                  ? "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300"
                  : ""
              }`}
              onClick={() => dispatch(decreaseProductCount(product))}
              disabled={product.count === 1}
            >
              -
            </button>
            <p className="ml-3 mr-3 text-lg font-medium text-gray-700">
              {product.count}
            </p>
            <button
              className="btn btn-outline btn-square btn-sm border-gray-400 text-gray-700"
              onClick={() => dispatch(increaseProductCount(product))}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-outline btn-error ml-2 mt-2 sm:mt-0"
            onClick={() => dispatch(deleteProduct(product))}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default CartItem;
