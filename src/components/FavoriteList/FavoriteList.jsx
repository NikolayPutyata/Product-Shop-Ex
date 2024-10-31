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
      <ul className="flex flex-wrap gap-8 justify-center">
        {favoriteList?.map((item) => (
          <li key={item.id}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link to={`/products/${item.id}`} state={location}>
                <figure>
                  <img src={item.thumbnail} />
                </figure>
              </Link>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>${item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
