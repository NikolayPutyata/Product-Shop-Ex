import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartOps";
import { Link } from "react-router-dom";

const ListItem = ({ product, location }) => {
  const dispatch = useDispatch();

  const addToFavoriteFu = (product) => {
    const favorites = JSON.parse(localStorage.getItem("favorite")) || [];

    favorites.push(product);

    localStorage.setItem("favorite", JSON.stringify(favorites));
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <Link to={`/products/${product.id}`} state={location}>
          <figure>
            <img src={product.thumbnail} />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>${product.price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add
            </button>
            <button
              className="btn btn-primary"
              onClick={() => addToFavoriteFu(product)}
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
