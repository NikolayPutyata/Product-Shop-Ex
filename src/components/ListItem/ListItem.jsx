import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";
import { Link } from "react-router-dom";

const ListItem = ({ product, location }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Link to={`/products/${product.id}`} state={location}>
          <img src={product.thumbnail} />
          <p>${product.price}</p>
          <p>{product.title}</p>
        </Link>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ListItem;
