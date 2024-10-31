import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const favoriteListFromStorage = JSON.parse(
      localStorage.getItem("favorite")
    );
    favoriteListFromStorage
      ? setFavoriteList([...favoriteListFromStorage])
      : setFavoriteList([]);
  }, []);

  return (
    <div>
      <h2>Your Favorite</h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {favoriteList?.map((item) => (
          <li key={item.id}>
            <div className="card bg-base-100 w-48 shadow-xl transform transition duration-200 hover:scale-105">
              <Link to={`/products/${item.id}`}>
                <figure>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <p>${item.price}</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
