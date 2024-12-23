import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/operations/cartOps";
import { selectDisabledProductTitles } from "../../redux/selectors";

const ItemBody = ({ product }) => {
  const dispatch = useDispatch();
  const disabledProductTitles = useSelector(selectDisabledProductTitles);

  return (
    <>
      <div className="card-body pb-4">
        <h2 className="card-title text-sm">{product.title}</h2>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button
            className={`btn btn-outline btn-primary ${
              disabledProductTitles.includes(product.title)
                ? "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300"
                : ""
            }`}
            disabled={disabledProductTitles.includes(product.title)}
            onClick={() => dispatch(addToCart(product))}
          >
            {disabledProductTitles.includes(product.title)
              ? "Added"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemBody;
