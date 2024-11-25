import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ItemBody from "./ItemBody";
import { useState, useEffect } from "react";
import Badges from "./Badges";

const ListItem = ({ product, location }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];
    setIsFavorite(favoriteList.some((item) => item.id === product._id));
  }, [product._id]);

  const toggleFavorite = () => {
    const favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];

    if (isFavorite) {
      const updatedFavorites = favoriteList.filter(
        (favorite) => favorite.id !== product._id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    } else {
      favoriteList.push(product);
      localStorage.setItem("favorite", JSON.stringify(favoriteList));
    }

    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="card bg-base-100 w-80 shadow-xl relative">
      <Badges product={product} />

      <button className="p-0 absolute top-2 right-2" onClick={toggleFavorite}>
        <FaStar
          className={`w-7 h-7 ${isFavorite ? "text-[gold]" : "text-[#d3d3d3]"}`}
        />
      </button>
      <Link to={`/products/${product._id}`} state={location}>
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
