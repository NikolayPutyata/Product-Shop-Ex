import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Cart/cartOps";
import { selectDisabledProductTitles } from "../../redux/Products/productsSlice";

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
            className="btn btn-outline"
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
