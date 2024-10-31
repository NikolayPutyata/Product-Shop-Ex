import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  deleteProduct,
  increaseProductCount,
} from "../../redux/cartOps";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li
        key={product.id}
        className="flex justify-around items-center border p-4 mb-3"
      >
        <img src={product.thumbnail} className="w-20" />

        <div className="w-40">
          <p className="break-words p-4 text-lg">{product.title}</p>
        </div>

        <p className="break-words p-4 text-lg">
          ${(product.price * product.count).toFixed(2)}
        </p>
        <div className="flex justify-center items-center">
          <button
            className="btn btn-outline btn-square btn-sm"
            onClick={() => dispatch(decreaseProductCount(product))}
          >
            -
          </button>
          <p className="ml-2 mr-2">{product.count}</p>
          <button
            className="btn btn-outline btn-square btn-sm"
            onClick={() => dispatch(increaseProductCount(product))}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-outline btn-error ml-2"
          onClick={() => dispatch(deleteProduct(product))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default CartItem;
