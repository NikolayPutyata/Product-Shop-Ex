import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ItemBody from "./ItemBody";

const ListItem = ({ product, location }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorited((prev) => !prev);
    addToFavoriteFu(product);
  };

  const addToFavoriteFu = (product) => {
    const favorites = JSON.parse(localStorage.getItem("favorite")) || [];

    const isAlreadyFavorited = favorites.some(
      (favorite) => favorite.id === product.id
    );

    if (!isAlreadyFavorited) {
      favorites.push(product);
    } else {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== product.id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      return;
    }

    localStorage.setItem("favorite", JSON.stringify(favorites));
  };

  return (
    <div className="card bg-base-100 w-80 shadow-xl relative">
      <button
        className="p-0 absolute top-2 right-2"
        onClick={handleToggleFavorite}
      >
        <FaStar
          className={`w-7 h-7 ${
            isFavorited ? "text-[gold]" : "text-[#d3d3d3]"
          } hover:text-[gold]`}
        />
      </button>
      <Link to={`/products/${product.id}`} state={location}>
        <figure className="flex justify-center items-center w-full h-[300px] overflow-hidden">
          <img
            src={product.images[1] ? product.images[1] : product.thumbnail}
            className="w-full h-full object-cover"
            alt={product.title}
          />
        </figure>
      </Link>
      <ItemBody product={product} />
    </div>
  );
};

export default ListItem;
