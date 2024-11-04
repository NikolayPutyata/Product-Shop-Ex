import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cart/cartOps";
import { selectDisabledProductIds } from "../../redux/Products/productsSlice";

const ItemBody = ({ product }) => {
  const dispatch = useDispatch();
  const disabledProductIds = useSelector(selectDisabledProductIds);

  return (
    <>
      <div className="card-body pb-4">
        <h2 className="card-title text-sm">{product.title}</h2>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline"
            disabled={disabledProductIds.includes(product.id)}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemBody;
