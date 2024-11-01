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
      <div className="card bg-base-100 w-80 shadow-xl">
        <Link to={`/products/${product.id}`} state={location}>
          <figure className="flex justify-center items-center w-full h-[300px] overflow-hidden">
            <img
              src={product.images[1] ? product.images[1] : product.thumbnail}
              className="w-full h-full object-cover"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title text-sm">{product.title}</h2>
          <p>${product.price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-outline"
              onClick={() => dispatch(addToCart(product))}
            >
              Add
            </button>
            <button
              className="btn btn-outline"
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
